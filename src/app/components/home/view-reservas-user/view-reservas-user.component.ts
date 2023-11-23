import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro, Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-view-reservas-user',
  templateUrl: './view-reservas-user.component.html',
  styleUrls: ['./view-reservas-user.component.css']
})
export class ViewReservasUserComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private apiService: APIService, private router: Router) { }

  ngOnInit(): void {
    const currentUserId = this.authService.getUserToken();
    this.apiService.getUsuarioPorId(currentUserId).subscribe((usuario) => {
      console.log(usuario);
      this.usuario = new Usuario(usuario);
    });
  }

  public cancelarReservaDe(libro: Libro) {
    this.apiService.getLibroData(libro.id!).subscribe((libroRemoto) => {
      this.apiService.cambiarDisponibilidad(libroRemoto.id!, libroRemoto.disponibilidad! + 1).subscribe({
        next: () => {
          const currentUserId = this.authService.getUserToken();
          this.usuario.eliminarReserva(libroRemoto);
          this.apiService.editUsuario(currentUserId, this.usuario).subscribe({
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

  public navigateToHome() {
    return this.router.navigate(['/home']);
  }
}
