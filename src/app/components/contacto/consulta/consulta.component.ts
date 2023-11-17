import { Component, EventEmitter, Output } from '@angular/core';
import { Consulta } from 'src/app/core/Models';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  @Output() public consultaToCreate: EventEmitter<Consulta> = new EventEmitter();

  constructor(){}

  public newConsulta: Consulta = new Consulta();
  
  public createConsulta(){
    this.consultaToCreate.emit(this.newConsulta);
  }
}

