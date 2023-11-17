import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/core/services/api.service';
import { Usuario } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  nombreCompleto: string ='';

  constructor(private authservice:AuthService){}
  
  ngOnInit(): void {
   
    const usuario = this.authservice.getUsuario();

    if (usuario && usuario.nombre && usuario.apellido) {
      this.nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
    }
  }
  
}


