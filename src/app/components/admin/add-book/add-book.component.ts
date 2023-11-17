import { Component, EventEmitter, Output } from '@angular/core';
import { Libro } from 'src/app/core/Models';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public newLibro: Libro = new Libro();

  @Output() public libroToCreate: EventEmitter<Libro> = new EventEmitter();

  constructor(){}

  public createLibro(){
    const url: string = '../assets/imagenes'

    if (this.newLibro.imagenUrl != ''){
      switch ( this.newLibro.imagenUrl ) {
        case "Suspenso":
          this.newLibro.imagenUrl = url + "/libroNuevo1.jpg";
            break;
        case "Novela":
          this.newLibro.imagenUrl = url + "/libroNuevo2.jpg"
            break;
        case "Misterio":
          this.newLibro.imagenUrl = url + "/libroNuevo3.jpg"
            break;
        case "Fantasía":
          this.newLibro.imagenUrl = url + "/libroNuevo4.jpg"
            break;
        case "Ciencia ficción":
          this.newLibro.imagenUrl = url + "/libroNuevo5.jpg"
            break;
        case "Historia":
          this.newLibro.imagenUrl = url + "/libroNuevo6.jpg"
            break;
        case "Chinchulines":
          this.newLibro.imagenUrl = url + "/libroNuevo7.jpg"
            break;
        default:
          this.newLibro.imagenUrl = url + "/libritox.jpg"
            break;
      }
    }
    this.newLibro.disponibilidad = 1;
    this.libroToCreate.emit(this.newLibro);
  }
}
