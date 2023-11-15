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
            this.newNoticia.imagenUrl = url + "/1novedad.jpg";
              break;
          case "Nuevo Libro":
            this.newNoticia.imagenUrl = url + "/no.jpg"
              break;
          case "Atencion":
            this.newNoticia.imagenUrl = url + "/noticia3.jpg"
              break;
          default:
            this.newNoticia.imagenUrl = url + "/noticia4.jpg"
              break;
        }
      }
      
      this.noticiaToCreate.emit(this.newNoticia);
    }
  }


