import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Noticia, Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-noticias-aside',
  templateUrl: './noticias-aside.component.html',
  styleUrls: ['./noticias-aside.component.css']
})
export class NoticiasAsideComponent implements OnInit{

  private newsAside: Noticia = new Noticia();

  public esAdmin: boolean = false;

  constructor(private newsService: NewsService, private apiService: APIService, private authService: AuthService) { }

  ngOnInit(): void {
    this.inicializarEsAdmin()
    this.newsService.get().subscribe((remoteNews) => this.newsAside = remoteNews)
  }

  public inicializarEsAdmin() {
    this.apiService.getUsuarioPor(this.authService.getUserToken()).subscribe((usuarioRemoto) => {
      // TUVE QUE PARSEAR EL LITERAL AL MODELO PORQUE NO COINCIDEN LOS PROPERTYS!!!!!
      const usuario: Usuario = new Usuario(usuarioRemoto);
      this.esAdmin = usuario.tipoDeCuenta === "Admin"
    })
  }

  public titulo(): string {
    return this.newsAside.titulo;
  }

  public contenido(): string {
    return this.newsAside.contenido;
  }

  /*
  async getNews() {

    try {

      let responseApi = this.newsService.get();

      const data = await lastValueFrom(responseApi);

      this.newsAside = data.map((newsData: any) => new Noticia(newsData));

    } catch (error) {
      console.error(error);
    }

  }

  */



}
