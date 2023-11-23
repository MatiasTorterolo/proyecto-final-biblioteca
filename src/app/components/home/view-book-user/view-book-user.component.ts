import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro, Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-view-book-user',
  templateUrl: './view-book-user.component.html',
  styleUrls: ['./view-book-user.component.css']
})
export class ViewBookUserComponent {


  @Input() inputLibros: Array<Libro> = []
  @Input() inputUsuario: Usuario = new Usuario();
  @Output() libroToBorrow: EventEmitter<number> = new EventEmitter();

  constructor(private apiService: APIService, private authService: AuthService) { }
  
  /*
  public borrowLibro(id: number){
    this.libroToBorrow.emit(id);
    console.log("funciona el ts de view-bookUser ", id);
  }
  */

  public agregarLibroAlArreglo(libro: Libro) {
    const currentUserId = this.authService.getUserToken();
    this.apiService.addLibroToUsuario(currentUserId, libro).subscribe((isCorrectlyUpdated) => {
      if (isCorrectlyUpdated) {
        alert('Libro agregado correctamente');
      } else {
        alert('Error al agregar el libro');
      }
    });
  }


}

