import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from 'src/app/core/Models';


@Component({
  selector: 'app-view-book-user',
  templateUrl: './view-book-user.component.html',
  styleUrls: ['./view-book-user.component.css']
})
export class ViewBookUserComponent {


@Input() inputLibros: Array<Libro> = []
@Output() libroToBorrow: EventEmitter<number> = new EventEmitter();

public borrowLibro(id: number){
  this.libroToBorrow.emit(id);
  console.log("funciona el ts de view-bookUser ", id);
}

}
