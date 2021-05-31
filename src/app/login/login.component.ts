import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  constructor(private loginService: LoginService, private router: Router) {
    this.email = '';
    this.password = '';
  }

  login() {
    if (this.email != '' && this.password != '') {
       /* console.log(msg);
        localStorage.setItem('user', this.username);
        this.router.navigate(['/first']); */
        this.loginService.login(this.email, this.password).then(res => {
          console.log(res);
          localStorage.setItem('user', this.email);
          this.router.navigate(['termekek']);

      }).catch(error => {
        console.log('login error', error);
        this.router.navigate(['/error']);
      })
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.loginService.logout().then(() => {
        console.log('logout sikeres');
      }).catch(error => {
        console.log('logout error', error);
      })
    }
  }

}
