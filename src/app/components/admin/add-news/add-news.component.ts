import { Component, EventEmitter, Output } from '@angular/core';
import { Noticia } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-add-notice',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNoticeComponent {

  public newNoticia: Noticia = new Noticia();

  @Output() public noticiaToCreate: EventEmitter<Noticia> = new EventEmitter();

  constructor() {}

  public createNoticia() {
      const url: string = '../assets/imagenes'
      
      if (this.newNoticia.imagenUrl != ''){
        switch ( this.newNoticia.imagenUrl ) {
          case "Novedad":
            this.newNoticia.imagenUrl = url + "/1novedad.png";
              break;
          case "Nuevo Libro":
            this.newNoticia.imagenUrl = url + "/1nuevoLibro.png"
              break;
          case "Atencion":
            this.newNoticia.imagenUrl = url + "/1atencion.png"
              break;
          default:
            this.newNoticia.imagenUrl = url + "/1predeterminado.png"
              break;
        }
      }
      
      this.noticiaToCreate.emit(this.newNoticia);
    }
  }


