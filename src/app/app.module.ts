import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NoticiasAsideComponent } from './shared/noticias-aside/noticias-aside.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditBookComponent } from './components/admin/edit-book/edit-book.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { ViewBookComponent } from './components/admin/view-book/view-book.component';
import { ViewUserComponent } from './components/admin/view-user/view-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { ViewBookUserComponent } from './components/home/view-book-user/view-book-user.component';
import { AddNoticeComponent } from './components/admin/add-news/add-news.component';
import { SearchBookComponent } from './components/home/search-book/search-book.component';
import { BuscarLibroComponent } from './shared/buscar-libro/buscar-libro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConsultaComponent } from './components/contacto/consulta/consulta.component';
import { ViewConsultComponent } from './components/admin/view-consult/view-consult.component';
import { ViewReservasUserComponent } from './components/home/view-reservas-user/view-reservas-user.component';
import { ViewReservasComponent } from './components/admin/view-reservas/view-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NoticiasAsideComponent, // <-- Add the @Component decorator here
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
    EditUserComponent,
    ViewBookUserComponent,
    AddNoticeComponent,
    SearchBookComponent,
    BuscarLibroComponent,
    ContactoComponent,
    ConsultaComponent,
    ViewConsultComponent,
    ViewReservasUserComponent,
    ViewReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
