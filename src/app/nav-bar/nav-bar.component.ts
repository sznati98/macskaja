import { Router } from '@angular/router';
import { LoginService } from './../utils/login.service';
import { FirebaseService } from './../services/firebase.service';
 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userLevel: string;

  constructor(private firebaseService: FirebaseService, private loginService: LoginService, private router: Router) {
    this.userLevel = "";
  }

  ngOnInit(): void {
    this.setUserLevel();
  }

  setUserLevel(){
    this.userLevel = this.firebaseService.getUserlevel();
  }

  logout() {
    {
      if(localStorage.getItem('user')) {
        localStorage.removeItem('user');
        localStorage.removeItem('kosar');
        this.loginService.logout().then(() => {
          console.log('logout sikeres');
          this.router.navigate(['/home']);
        }).catch(error => {
          console.log('logout error', error);
        })
      }
    }
  }

}
