import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/core/Models';

@Component({
  selector: 'app-noticias-aside',
  templateUrl: './noticias-aside.component.html',
  styleUrls: ['./noticias-aside.component.css']
})
export class NoticiasAsideComponent {

  @Input() inputNoticias: Array<Noticia> = []



}
