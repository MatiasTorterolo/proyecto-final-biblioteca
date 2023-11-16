import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/api.service';
import { Libro } from 'src/app/core/Models';

@Component({
  selector: 'app-view-book-user',
  templateUrl: './view-book-user.component.html',
  styleUrls: ['./view-book-user.component.css']
})
export class ViewBookUserComponent implements OnInit{
 
  @Input() inputLibros: Array<Libro> = [];
  libro: any[] = [];
  constructor(private apiservise:APIService){ }
    
  ngOnInit(): void {
    this.apiservise.getLibros().subscribe(data=>{
      this.libro = data;
    });
  } 

  reservarLibro(libro: { disponibilidad: boolean; }): void {
    if (!libro.disponibilidad) {
      libro.disponibilidad = true;
    }
  }
}
