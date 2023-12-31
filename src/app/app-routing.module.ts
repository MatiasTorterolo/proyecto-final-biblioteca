import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ViewReservasUserComponent } from './components/home/view-reservas-user/view-reservas-user.component';
import { ViewReservasComponent } from './components/admin/view-reservas/view-reservas.component';


const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'admin',
    component:AdminComponent,
    canActivate: [authGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'reservas',
    component: ViewReservasUserComponent,
    canActivate: [authGuard]
  },
  {
    path: 'reservasTotales',
    component: ViewReservasComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
