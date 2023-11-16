import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { Libro } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-filtrargenero',
  templateUrl: './filtrargenero.component.html',
  styleUrls: ['./filtrargenero.component.css']
})
export class FiltrargeneroComponent implements OnInit {


  generos = ["Novela", 'Ciencia ficción', 'Historia', 'Suspenso', 'Misterio', 'Fantasía', 'Todos'];
  libros: Libro[] = [];
  formLibro!: FormGroup;
  generoSeleccionado: string = '';

  constructor(private apiService: APIService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formLibro = this.fb.group({
      generoSeleccionado: [''],
    });

    const generoSeleccionadoControl = this.formLibro.get('generoSeleccionado');

    if (generoSeleccionadoControl) {
      let generoActual: string;
      generoSeleccionadoControl.valueChanges
        .pipe(
          debounceTime(300),
          switchMap((generoActual: string) => {
            return this.apiService.getlibroPorGenero(generoActual);
          })
        )
        .subscribe((libros: Libro[]) => {
          // Filtra los libros según el género seleccionado
            this.libros = generoActual==='Todos' ? libros.filter(libro => libro.genero === generoActual) : libros;
          
        });
    } else {
      console.error("El control 'generoSeleccionado' es nulo.");
    }
  }
}

  /*
  generos = ["Novela", 'Ciencia ficción', 'Historia', 'Suspenso', 'Misterio', 'Fantasía'];
  libros: Libro[] = [];
  formLibro!: FormGroup;
  generoSeleccionado: string = '';


  constructor(private apiService: APIService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formLibro = this.fb.group({
      generoSeleccionado: [''],
    });

    const generoSeleccionadoControl = this.formLibro.get('generoSeleccionado');

    if (generoSeleccionadoControl) {
      generoSeleccionadoControl.valueChanges
        .pipe(
          debounceTime(300),
          switchMap((genero: string) => this.apiService.getlibroPorGenero(genero))
        )
        .subscribe((libros: Libro[]) => {
         /* const generoSeleccionado = generoSeleccionadoControl.value;
          this.libros = genero ? libros.filter(libro => libro.genero === genero) : libros;
        });
    } else {
      
    
      
      console.error("El control 'generoSeleccionado' es nulo.");
    }
  }
  */


/*
  generos = ['Novela', 'Ciencia Ficción', 'Historia', 'Suspenso', 'Misterio', 'Fantasía'];
  libros: Libro[] = [];
  formLibro!: FormGroup;
  
  @Output() librosAMostrar: EventEmitter<Libro> = new EventEmitter();
  
  constructor(private apiService: APIService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formLibro = this.fb.group({
      generoSeleccionado: [''],
    });
    

    this.apiService.getLibros().subscribe((libros: Libro[]) => {
      this.libros = libros;
    });
  }

  filtrarPorGenero() {
    const generoSeleccionado = this.formLibro.get('generoSeleccionado').value ;

    if (generoSeleccionado) {
      this.libros = this.libros.filter((libro) => libro.genero === generoSeleccionado);
    }
  }

  public mostrarLibro(libro: Libro){
    this.librosAMostrar.emit(libro);
  }
*/

