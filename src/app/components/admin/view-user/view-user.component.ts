import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/core/Models';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  @Input() inputUsuarios: Array<Usuario> = []
  @Output() usuarioToDelete: EventEmitter<number> = new EventEmitter();
  @Output() usuarioToEdit: EventEmitter<Usuario> = new EventEmitter();



  public deleteUsuario(id: number){
    this.usuarioToDelete.emit(id);
  }

  public editUsuario(usuario: Usuario){
    this.usuarioToEdit.emit(usuario);
  }
}
