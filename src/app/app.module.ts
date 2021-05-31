import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TermekekComponent } from './termekek/termekek.component';
import { FirebaseService } from './services/firebase.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KosarComponent } from './kosar/kosar.component';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    TermekekComponent,
    AdminComponent,
    NavBarComponent,
    KosarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
