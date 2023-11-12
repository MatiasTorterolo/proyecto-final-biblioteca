import { Component, Input, OnInit } from '@angular/core';
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

  libros!: Observable<any[]>;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.libros = this.apiService.getLibros();
  }
  

}


