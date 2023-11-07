import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario = new Usuario({id: 0});

  constructor(private authService: AuthService, private router: Router) {}

  public async checkAuth(){

    const check = this.authService.checkAuth(this.usuario.email, this.usuario.password);

    if(await check){
      this.router.navigate(['/home']);
    }
    else{
      alert("No existe el usuario");
    }
  }

  public navigateToRegister(){
    this.router.navigate(['/register']);
  }

}
