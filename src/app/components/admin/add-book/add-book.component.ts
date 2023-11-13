import { Component, EventEmitter, Output } from '@angular/core';
import { Libro } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';

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
    this.libroToCreate.emit(this.newLibro);
  }
}
