import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public usuario: Usuario = new Usuario();

  constructor(private apiService: APIService, private router: Router) {}

  register() {
    const usuario = { id: this.usuario.id, nombre: this.usuario.nombre, apellido:this.usuario.apellido, email: this.usuario.email, password: this.usuario.password, tipoDeCuenta: "Usuario" };

    this.apiService.addUsuario(usuario)


  }

  public navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
