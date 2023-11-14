import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { APIService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Libro } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';
import { EditBookComponent } from '../admin/edit-book/edit-book.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private apiService: APIService, private dialog: MatDialog) { }

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

  public editLibro(libro: Libro) {

    const dialogRef = this.dialog.open(EditBookComponent, { data: libro, height: '400px', width: '350px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró con resultado:', result);
    });
  }

  public returnLibro(id: number): void {
    console.log("funciona el ts de admin component ", id);
    this.apiService.cambiarDisponibilidad(id, 1).subscribe({
      next: ()=>{
        this.getLibros();
        alert("Libro devuelto con exito");
      },
      error: ()=> alert("No se ha podido devolver el libro")
    })
  }
}
