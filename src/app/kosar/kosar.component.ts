import { ConnectionService } from './../utils/connection.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { TermekekComponent } from '../termekek/termekek.component';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.scss']
})
export class KosarComponent implements OnInit {

  kosar: any[]
  localKosar: any[]
  vegosszeg: number;

  constructor(private afs: AngularFirestore, private afa: AngularFireAuth, private connectionService: ConnectionService) {
    this.localKosar = [];
    this.kosar = [];
    this.vegosszeg = 0;

  }

  ngOnInit(): void {
    this.loadKosarFromLocalStorage();
    this.getTermekekFromDB();
  }

  vasarlas(){
    for(let i = 0; i < this.kosar.length; i++){
      this.connectionService.newTranzakcio({"id": this.kosar[i].id,"ar": this.kosar[i].ar,"leiras": this.kosar[i].leiras}).subscribe(res => {
        console.log('spring response', res);
      }, error => {
        console.log();
      });
    }
    localStorage.removeItem('kosar');
    this.kosar = []
    this.vegosszeg = 0;
  }
  
  loadKosarFromLocalStorage(){
    this.localKosar = this.getKosarFromLocalStorage();
  }

  getKosarFromLocalStorage(){
    if(localStorage.getItem('kosar')){
      this.localKosar = JSON.parse(localStorage.getItem('kosar') || '{}');
      return this.localKosar;
    }
    this.localKosar = [];
    return this.localKosar;
  }

  getTermekekFromDB(){
    this.loadKosarFromLocalStorage();
    for(let i = 0; i < this.localKosar.length; i++){
      this.afs.collection('Termekek', ref => ref.where('id', '==', this.localKosar[i].id)).get().subscribe(res => {
        res.docs.forEach(doc => {
          const data = doc.data() as any;
          let ar = data.ar.split(" ");
          ar[0] *= this.localKosar[i].count
          this.vegosszeg += ar[0];
          ar = ar[0] + " " + ar[1]
          this.kosar.push({"id": data.id, "kepurl": data.kepurl, "leiras": data.leiras, "ar": ar, "db": this.localKosar[i].count});

        })
      }, error => {
        console.log('query error', error);
      })
    }
    return this.kosar;
  }


}
