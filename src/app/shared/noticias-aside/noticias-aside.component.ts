import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Noticia } from 'src/app/core/Models';
import { Location } from '@angular/common';




@Component({
  selector: 'app-noticias-aside',
  templateUrl: './noticias-aside.component.html',
  styleUrls: ['./noticias-aside.component.css']
})
export class NoticiasAsideComponent {

  constructor(private location: Location){}

  @Input() inputNoticias: Array<Noticia> = []
  @Output() noticiaToDelete: EventEmitter<number> = new EventEmitter();



  public deleteNoticia(id: number){
    this.noticiaToDelete.emit(id);
  }

  isAdminPage(): boolean {
    return window.location.pathname.endsWith('/admin');
  }
}

  


