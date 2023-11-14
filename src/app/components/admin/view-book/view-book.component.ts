import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from 'src/app/core/Models';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {


  @Input() inputLibros: Array<Libro> = []
  @Output() libroToDelete: EventEmitter<number> = new EventEmitter();
  @Output() libroToEdit: EventEmitter<Libro> = new EventEmitter();
  @Output() libroToReturn: EventEmitter<number> = new EventEmitter();


  public deleteLibro(id: number){
    this.libroToDelete.emit(id);
  }

  public editLibro(libro: Libro){
    this.libroToEdit.emit(libro);
  }

  public returnLibro(id: number){
    this.libroToReturn.emit(id);
    console.log("funciona el ts de view-book ", id);
  }

}


