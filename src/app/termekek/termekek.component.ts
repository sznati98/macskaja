import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.scss']
})
export class TermekekComponent implements OnInit {

  termekek: any[];
  kosar: any[];

  constructor(private loginService: LoginService, private router: Router, private afs: AngularFirestore, private afa: AngularFireAuth) {
    this.termekek = [];
    this.kosar=[{id: "", count: 0}];
  }

  logout() {
    {
      if(localStorage.getItem('user')) {
        localStorage.removeItem('user');
        this.loginService.logout().then(() => {
          console.log('logout sikeres');
          this.router.navigate(['/home']);
        }).catch(error => {
          console.log('logout error', error);
        })
      }
    }
  }
  ngOnInit(): void {
    this.getTermekek();
  }

  getTermekek(){
    this.afs.collection('Termekek').get().subscribe(res => {
      res.docs.forEach(doc => {
        const data = doc.data() as any;
        this.termekek.push({"id": data.id, "kepurl": data.kepurl, "leiras": data.leiras, "ar": data.ar});
      })
    }, error => {
      console.log('query error', error);
    })
  }

  putTermekInKosar(termekId: string){
    let benneVan = false; 
    this.kosar = this.getKosarFromLocalStorage()
    for(let i = 0; i < this.kosar.length; i++){
      if(this.kosar[i].id == termekId){
        this.kosar[i].count += 1;
        benneVan = true;
        break;
      }
    }
    if(!benneVan){
      this.kosar.push({id: termekId, count: 1});
    }
    localStorage.removeItem('kosar');
    localStorage.setItem('kosar', JSON.stringify(this.kosar));
  }

  getKosarFromLocalStorage(){
    if(localStorage.getItem('kosar')){
      this.kosar = JSON.parse(localStorage.getItem('kosar') || '{}');
      return this.kosar;
    }
    this.kosar = [];
    return this.kosar;
  }

  getKosar(){
    return this.kosar;
  }

}
