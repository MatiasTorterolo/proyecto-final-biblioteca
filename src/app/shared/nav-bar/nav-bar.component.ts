import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  nombreCompleto: string = '';

  private nav: HTMLElement | null = null;

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    // Lógica para obtener el nombre del usuario
    const usuario = this.authservice.getUsuario();

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

      // También puedes llamar a la función una vez en la inicialización
      fijarBarraNavegacion();
    }
  }
}