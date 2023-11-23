import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  searchBook: string = '';
  libros: Libro[] = [];

  constructor(private apiService: APIService, private authService: AuthService) { }
  ngOnInit(): void {
    this.searchBookFn();
  }

  searchBookFn() {
    this.apiService.getLibros().subscribe(libros => {
      const librosDisponibles = libros.filter(libro => libro.disponibilidad! > 0);
      this.libros = librosDisponibles.filter(libro => {
        return libro.nombre.toLowerCase().includes(this.searchBook.toLowerCase())
      });
    });
  }

  borrowLibro(libro: Libro) {
    this.apiService.cambiarDisponibilidad(libro.id!, libro.disponibilidad! - 1).subscribe({
      next: () => {
        const currentUserId = this.authService.getUserToken();
        this.apiService.addLibroToUsuario(currentUserId, libro).subscribe({
          next: () => {
            this.searchBookFn();
            alert("Libro reservado con exito");
          },
          error: () => alert("No se ha podido agregar el libro al usuario")
        })
      },
      error: () => alert("No se ha podido reservar el libro")
    })
  }
}
