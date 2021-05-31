import { KosarComponent } from './kosar/kosar.component';
import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TermekekComponent } from './termekek/termekek.component';
import { RegistrationComponent } from './registration/registration.component';

import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './guards/authguard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'termekek', component: TermekekComponent, canActivate: [AuthguardGuard]},
  {path: 'kosar', component: KosarComponent, canActivate: [AuthguardGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},

  {path: 'home', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
