import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  nombre:string[];

  constructor() {
    this.nombre=["Juan"];
  }

  private nav: HTMLElement | null = null;

  ngOnInit(): void {
    this.nav = document.getElementById("contenedor-nav");

    if (this.nav) {
      const navOffsetTop: number = this.nav.offsetTop;

      const fijarBarraNavegacion = (): void => {
        if (window.pageYOffset > navOffsetTop) {
          if (this.nav && this.nav.style) {
            this.nav.style.position = "fixed";
            this.nav.style.top = "0";
          }
        } else {
          if (this.nav && this.nav.style) {
            this.nav.style.position = "static";
          }
        }
      };

      window.addEventListener("scroll", fijarBarraNavegacion);
    }
  }
}
