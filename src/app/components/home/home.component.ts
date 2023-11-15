import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { APIService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Libro, Noticia } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';
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

  ngOnInit(): void {

    this.getLibros();

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

  public editLibro(libro: Libro) {

    const dialogRef = this.dialog.open(EditBookComponent, { data: libro, height: '400px', width: '350px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró con resultado:', result);
    });
  }

  public createLibro(libro: Libro) {

    this.apiService.addLibro(libro).subscribe({
      next: () => {
        this.getLibros();
        alert("Libro creado con exito");

      },
      error: () => alert("No se ha podido crear el libro")
    })
  }

  public deleteLibro(id: number){

      this.apiService.deleteLibro(id).subscribe({
        next: ()=>{
          this.getLibros();
          alert("Libro eliminado con exito");
        },
        error: ()=> alert("No se ha podido eliminar el libro")
      })
  }

}
