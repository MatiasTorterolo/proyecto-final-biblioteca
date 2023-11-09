import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Libro, Usuario } from '../Models';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  //http://localhost:3000/usuarios

  private url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  getNextId(): Observable<number> {
    return this.http.get<Usuario[]>(`${this.url}/usuarios`).pipe(map(data => data.length + 1));
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/usuarios`);
  }

  addUsuario(createUsuario: Usuario): Observable<boolean> {
    const urlAdd = `${this.url}/usuarios`;
    return this.http.post<boolean>(urlAdd, createUsuario);
  }

  getUsuarioToAuth(email: string, password: string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}/usuarios?email=${email}&password=${password}`);
  }

  getLibros(): Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.url}/libros`);
  }

  addLibro(createLibro: Libro): Observable<boolean> {
    const urlAdd = `${this.url}/libros`;
    return this.http.post<boolean>(urlAdd, createLibro);
  }

  editLibro(id: number, updateLibro: Libro): Observable<boolean> {
    const urlEdit = `${this.url}/libros/${id}`;
    return this.http.put<boolean>(urlEdit, updateLibro);
  }

  deleteLibro(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/libros/${id}`)
    .pipe(
      map(resp => true), 
      catchError(error => of(false)) 
    );
  }
}
