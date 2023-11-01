import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NoticiasAsideComponent } from './shared/noticias-aside/noticias-aside.component';
import { PopularSectionComponent } from './shared/popular-section/popular-section.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { RegisterComponent } from './components/landing/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditBookComponent } from './components/admin/edit-book/edit-book.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { ViewBookComponent } from './shared/view-book/view-book.component';
import { ViewUserComponent } from './components/admin/view-user/view-user.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NoticiasAsideComponent,
    PopularSectionComponent,
    NavBarComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    EditBookComponent,
    AddBookComponent,
    ViewBookComponent,
    ViewUserComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
