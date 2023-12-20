import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro, Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

type RouteState = {
  userId: number;
}

@Component({
  selector: 'app-view-reservas',
  templateUrl: './view-reservas.component.html',
  styleUrls: ['./view-reservas.component.css']
})
export class ViewReservasComponent implements OnInit {

  IdDeUsuarioConReservas: number = 0;

  usuario: Usuario = new Usuario();

  constructor(private apiService: APIService, private location: LocationStrategy, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const routeState = this.location.getState() as RouteState;
    console.log(routeState)
    this.IdDeUsuarioConReservas = routeState.userId;

    this.apiService.getUsuarioPorId(this.IdDeUsuarioConReservas).subscribe((usuario) => {
      console.log(usuario);
      this.usuario = new Usuario(usuario);
    });
  }

  public devolver(libro: Libro) {
    this.apiService.getLibroData(libro.id!).subscribe((libroRemoto) => {
      this.apiService.cambiarDisponibilidad(libroRemoto.id!, libroRemoto.disponibilidad! + 1).subscribe({
        next: () => {
          this.usuario.eliminarReserva(libroRemoto);
          console.log(this.usuario);
          this.apiService.editUsuario(this.IdDeUsuarioConReservas, this.usuario).subscribe({
            next: () => {
              alert("Reserva cancelada con exito");
            },
            error: () => alert("No se ha podido cancelar la reserva")
          })
        },
        error: () => alert("No se ha podido cancelar la reserva")
      })
    })
  }

  navigateToAdmin() {
    return this.router.navigate(['/admin']);
  }

}
