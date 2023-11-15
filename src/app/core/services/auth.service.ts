import { Injectable } from '@angular/core';
import { Noticia, Usuario } from '../Models';
import { lastValueFrom } from 'rxjs';
import { APIService } from './api.service';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: Usuario | null | undefined = null;

  constructor(private apiService: APIService, private newsService: NewsService) { }


  /* currentUsuario
  get currentUsuario(): Usuario | undefined {
    if (!this.usuario) return undefined;
    return structuredClone(this.usuario);
  }
  */
  
  
  public async login(email: string, password: string): Promise<boolean>{

    let isLoggedIn = false;

    try{

      let apiResponse = this.apiService.getUsuarioToAuth(email, password);

      let usuarioResponse = await lastValueFrom(apiResponse);
      
      this.usuario = usuarioResponse.shift(); //shift devuelve REMUEVE el primer elemento de un arreglo y lo retorna

      if(this.usuario) {
        localStorage.setItem('token', this.usuario.id!.toString());
        isLoggedIn = true;
      }

    }catch(error){
      throw error;
    }

    return isLoggedIn;
  }

  public async register(usuario: Usuario): Promise<boolean>{
    
    let isRegister = false;

    try{

      let apiResponse = this.apiService.addUsuario(usuario);
      
      let usuarioResponse = await lastValueFrom(apiResponse);

      if(usuarioResponse){
        console.log('El usuario fue creado con exito')
        isRegister = true;
      }   
    } catch (error){
      throw error;
    }

    return isRegister;
  }

  public async postNew(news: Noticia): Promise<boolean>{

    let isUpdate = false;

    try {

      let apiResponse = this.newsService.post(news);

      let newsResponse = await lastValueFrom(apiResponse);

      if(newsResponse){
        isUpdate = true;
      }
    } catch (error) {
      throw error;
    }

    return isUpdate;
  }

  public logOut() {
    this.usuario = undefined;
    localStorage.removeItem('token');
  }

  public getUserToken(): number {
      return Number(localStorage.getItem('token'))
  }

  public isAuthorized(): boolean{
    return localStorage.getItem('token') ? true : false;
  }

  


}
