import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { Libro } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-buscar-libro',
  templateUrl: './buscar-libro.component.html',
  styleUrls: ['./buscar-libro.component.css']
})
export class BuscarLibroComponent implements OnInit{

  libros: Libro[] = [];
  formBuscar!: FormGroup;
  busqueda: string = '';

  constructor(private apiService: APIService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formBuscar = this.fb.group({
      busqueda: [''],
    });

    const busqueda = this.formBuscar.get('busqueda');

    if (busqueda) {
      busqueda.valueChanges
        .pipe(
          debounceTime(300),
          switchMap((nombre: string) => {
            return this.apiService.getLibroBuscar(nombre); // Ajusté el nombre del método
          })
        )
        .subscribe((libros: Libro[]) => {
          // Filtra los libros según el género seleccionado
          this.libros = libros;
        });
    } else {
      console.error("El control 'busqueda' es nulo.");
    }
}

}
