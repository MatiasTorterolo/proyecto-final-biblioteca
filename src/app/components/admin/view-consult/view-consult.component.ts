import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Consulta } from 'src/app/core/Models';

@Component({
  selector: 'app-view-consult',
  templateUrl: './view-consult.component.html',
  styleUrls: ['./view-consult.component.css']
})
export class ViewConsultComponent {

  @Input() inputConsultas: Array<Consulta> = []
  @Output() consultaToDelete: EventEmitter<number> = new EventEmitter();




  public deleteConsulta(id: number){
    this.consultaToDelete.emit(id);
  }


}
