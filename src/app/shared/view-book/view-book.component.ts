import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/core/Models';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() inputLibros: Array<Libro> = []
  @Output() libroToDelete: EventEmitter<number> = new EventEmitter();
  @Output() libroToEdit: EventEmitter<Libro> = new EventEmitter();


  public deleteLibro(id: number){
    this.libroToDelete.emit(id);
  }

  public editLibro(libro: Libro){
    this.libroToEdit.emit(libro);
  }

}


