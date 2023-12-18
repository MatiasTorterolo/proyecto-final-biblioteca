import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  nombreCompleto: string = '';

  private nav: HTMLElement | null = null;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Lógica para obtener el nombre del usuario
    const usuario = this.authservice.getUsuario();
    localStorage.setItem('usuario', JSON.stringify(usuario));

    if (usuario && usuario.nombre && usuario.apellido) {
      this.nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
    }
    

    // Lógica para fijar la barra de navegación
    this.nav = document.getElementById('contenedor-nav');

    if (this.nav) {
      const navOffsetTop: number = this.nav.offsetTop;

      const fijarBarraNavegacion = (): void => {
        if (window.pageYOffset > navOffsetTop) {
          if (this.nav && this.nav.style) {
            this.nav.style.position = 'fixed';
            this.nav.style.top = '0';
          }
        } else {
          if (this.nav && this.nav.style) {
            this.nav.style.position = 'static';
          }
        }
      };

      window.addEventListener('scroll', fijarBarraNavegacion);

      fijarBarraNavegacion();
    }
  }

  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['/landing']);
  }
  esAdmin(): boolean {
    const usuario = this.authservice.getUsuario();
    return usuario && usuario.tipoDeCuenta === 'Admin'; // Ajusta según la estructura real de tu objeto de usuario
  }

}