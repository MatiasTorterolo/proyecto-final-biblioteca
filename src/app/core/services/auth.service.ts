import { Injectable } from '@angular/core';
import { Usuario } from '../Models';
import { lastValueFrom } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: APIService) { }

  public async checkAuth(email: string, password: string): Promise<boolean>{

    let usuarios: Usuario[] = [];

    try{

      let apiResponse = this.apiService.getUsuarioToAuth(email, password);

      usuarios = await lastValueFrom(apiResponse);

    }catch(error){
      console.log(error);
    }

    return usuarios.length == 1;
  }
}
