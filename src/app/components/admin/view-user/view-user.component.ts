import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  public deleteUsuario(id: number){
    this.usuarioToDelete.emit(id);
  }

  public editUsuario(usuario: Usuario){
    this.usuarioToEdit.emit(usuario);
  }

  public viewReservas(userId: number){
    this.router.navigate(['/reservasTotales'], {state: {userId}});
  }
}
