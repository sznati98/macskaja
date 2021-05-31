import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router, private afs: AngularFirestore, public firebaseAuth: AngularFireAuth) {
    this.email = '';
    this.password = '';
   }

   saveData(email: string, password: string) {
     this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res => {
       localStorage.setItem('user', JSON.stringify(res.user))
     })
     this.afs.collection('Registration').add({email: this.email, szint: "user"}).then(res => {
       console.log('save successfull', res);
       this.email = '';
       this.password = '';
     }).catch(error => {
       console.log('save error', error);
     })
   }

  ngOnInit(): void {
  }

}
