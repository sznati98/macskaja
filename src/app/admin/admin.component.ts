import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  ar: string;
  leiras: string;
  kepurl: string;

  constructor(private afs: AngularFirestore, private loginService: LoginService, private router: Router, private firebaseService: FirebaseService) {
    this.ar = '';
    this.leiras = '';
    this.kepurl = '';
   }

   saveTermek() {
    
    this.afs.collection('Termekek').add({id: this.firebaseService.generatePushID(), ar: this.ar, leiras: this.leiras, kepurl: this.kepurl}).then(res => {
      console.log('save successfull', res);
      this.ar = '';
      this.leiras = '';
      this.kepurl = '';

    }).catch(error => {
      console.log('save error', error);
    })
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
  }

}
