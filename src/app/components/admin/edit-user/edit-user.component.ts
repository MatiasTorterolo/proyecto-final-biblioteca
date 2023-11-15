import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  public usuario: Usuario = new Usuario();
  public nuevaImagen: string = '';
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: APIService, private dialogRef: MatDialogRef<EditUserComponent>) {

  }
  ngOnInit(): void {
    this.usuario = this.data;
  }

  public editUsuario(){
    
    this.apiService.editUsuario(this.usuario.id!, this.usuario).subscribe({
      next: () => this.dialogRef.close(true),
      error: (error) => alert(error)
    })
  }

  public closeDialog(){
    this.dialogRef.close(false);
  }


}
