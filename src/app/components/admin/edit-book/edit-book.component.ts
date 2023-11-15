import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Libro } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  public libro: Libro = new Libro();
  public nuevaImagen: string = '';
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: APIService, private dialogRef: MatDialogRef<EditBookComponent>) {

  }
  ngOnInit(): void {
    this.libro = this.data;
  }

  public editLibro(){
    const img: string = '../assets/imagenes/libritox.jpg'
    if (this.nuevaImagen != ''){
      this.libro.imagenUrl = img;
      console.log("imagen cambiada")
    }

    this.apiService.editLibro(this.libro.id!, this.libro).subscribe({
      next: () => this.dialogRef.close(true),
      error: (error) => alert(error)
    })
  }

  public closeDialog(){
    this.dialogRef.close(false);
  }


}
