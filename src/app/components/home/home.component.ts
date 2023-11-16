import { Component, EventEmitter, OnInit } from '@angular/core';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { APIService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Libro, Noticia } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';
import { ViewBookUserComponent } from './view-book-user/view-book-user.component';
import { EditBookComponent } from '../admin/edit-book/edit-book.component';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: APIService, private dialog: MatDialog, private newsService: NewsService) { }

  public libro: Array<Libro> = [];
  public noticia: Array<Noticia> = [];

  ngOnInit(): void {

    this.getLibros();
    this.getNoticias();
  }

  public async getLibros() {

    try {

      let responseApi = this.apiService.getLibros();

      const data = await lastValueFrom(responseApi);

      this.libro = data.map((libroData: any) => new Libro(libroData));

    } catch (error) {
      console.error(error);
    }
  }

  public async getNoticias() {

    try {

      let responseApi = this.apiService.getNoticias();

      const data = await lastValueFrom(responseApi);

      this.noticia = data.map((noticiaData: any) => new Noticia(noticiaData));

    } catch (error) {
      console.error(error);
    }
  }

  public deleteNoticia(id: number){

    this.apiService.deleteNoticia(id).subscribe({
      next: ()=>{
        this.getNoticias();
        alert("Noticia eliminado con exito");
      },
      error: ()=> alert("No se ha podido eliminar el noticia")
    })
}

  public borrowLibro(id: number): void {
    console.log("funciona el ts de admin component ", id);
    this.apiService.cambiarDisponibilidad(id, 0).subscribe({
      next: ()=>{
        this.getLibros();
        alert("Libro reservado con exito");
      },
      error: ()=> alert("No se ha podido reservar el libro")
    })
  } 

}
