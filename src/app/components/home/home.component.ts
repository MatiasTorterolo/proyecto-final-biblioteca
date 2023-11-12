import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { APIService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  libroSeleccionado: any;
  libro: any;

  constructor(private apiService: APIService) {}

  obtenerDetallesLibro(libroId: number): void {
    this.apiService.getLibroData(libroId).subscribe(
      (detalles: any) => {
        this.libroSeleccionado = detalles;
      },
      error => {
        console.error('Error al obtener detalles del libro:', error);
      }
    );
  }

  ngOnInit(): void {
    
  }

}
