import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  searchBook: string = 'a';
  libros: Libro[] = [];

  constructor(private apiService: APIService) { }
  ngOnInit(): void {
    this.searchBookFn();
  }

  searchBookFn() {
    this.apiService.getLibros().subscribe(libros => {
      const librosDisponibles = libros.filter(libro => libro.disponibilidad == 1);
      this.libros = librosDisponibles.filter(libro => {
        if (this.searchBook == '') return false;
        return libro.nombre.toLowerCase().includes(this.searchBook.toLowerCase())
      });
    });
  }

  borrowLibro(id: number) {
    this.apiService.cambiarDisponibilidad(id, 0).subscribe({
      next: () => {
        this.searchBookFn();
        alert("Libro reservado con exito");
      },
      error: () => alert("No se ha podido reservar el libro")
    })
  }
}
