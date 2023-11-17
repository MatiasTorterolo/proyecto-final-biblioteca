import { Component } from '@angular/core';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { APIService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import {  Consulta } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private apiService: APIService, private dialog: MatDialog) { }


  public consulta: Array<Consulta> = [];

  ngOnInit(): void {


    this.getConsultas();

  }
  


public async getConsultas() {

    try {

      let responseApi = this.apiService.getConsultas();

      const data = await lastValueFrom(responseApi);

      this.consulta = data.map((consultaData: any) => new Consulta(consultaData));

    } catch (error) {
      console.error(error);
    }
  }

public createConsulta(consulta: Consulta) {

  this.apiService.addConsulta(consulta).subscribe({
    next: () => {
      this.getConsultas();
      alert("Consulta creado con exito");

    },
    error: () => alert("No se ha podido crear el Consulta")
  })
}

public deleteConsulta(id: number){

    this.apiService.deleteConsulta(id).subscribe({
      next: ()=>{
        this.getConsultas();
        alert("Consulta eliminado con exito");
      },
      error: ()=> alert("No se ha podido eliminar el Consulta")
    })
}


}


