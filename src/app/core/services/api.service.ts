import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, first, map, of } from 'rxjs';
import { Libro, Usuario, Noticia } from '../Models';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  static get(apiUrl: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  //http://localhost:3000/usuarios

  private url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getNextId(): Observable<number> {
    return this.http.get<Usuario[]>(`${this.url}/usuarios`).pipe(map(data => data.length + 1));
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/usuarios`);
  }

  getUsuarioPor(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/usuarios/${id}`).pipe(first())
  }

  addUsuario(createUsuario: Usuario): Observable<boolean> {
    const urlAdd = `${this.url}/usuarios`;
    return this.http.post<boolean>(urlAdd, createUsuario);
  }

  editUsuario(id: number, updateUsuario: Usuario): Observable<boolean> {
    const urlEdit = `${this.url}/usuarios/${id}`;
    return this.http.put<boolean>(urlEdit, updateUsuario);
  }

  deleteUsuario(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/usuarios/${id}`)
    .pipe(
      map(resp => true), 
      catchError(error => of(false)) 
    );
  }

  getUsuarioToAuth(email: string, password: string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}/usuarios?email=${email}&password=${password}`);
  }

  getLibros(): Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.url}/libros`);
  }

  getLibroData(id: number): Observable<any> {
    // Concatena el libroId a la URL si es necesario
    const url = `${this.url}/libros/${id}`;
    return this.http.get(url);
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

  cambiarDisponibilidad(id: number, nuevaDisponibilidad: number): Observable<boolean> {
    const urlEditarDisponibilidad = `${this.url}/libros/${id}`;
    return this.http.patch<boolean>(urlEditarDisponibilidad, { disponibilidad: nuevaDisponibilidad })
      .pipe(
        map(resp => true),
        catchError(error => of(false))
      );
  }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.url}/noticias`);
  }

  addNoticia(createNoticia: Noticia): Observable<boolean> {
    const urlAdd = `${this.url}/noticias`;
    return this.http.post<boolean>(urlAdd, createNoticia);
  }

  deleteNoticia(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/noticias/${id}`)
    .pipe(
      map(resp => true), 
      catchError(error => of(false)) 
    );
  }

}
