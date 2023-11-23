import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, first, map, of, switchMap } from 'rxjs';
import { Libro, Usuario, Noticia, Consulta } from '../Models';


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

  getUsuarioPorId(id: number) {
    const url = `${this.url}/usuarios/${id}`; // Reemplaza con la ruta real de tu API
    return this.http.get<Usuario>(url);
  }
  getUsuarioPor(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/usuarios/${id}`).pipe(first())
  }

  addUsuario(createUsuario: Usuario): Observable<boolean> {
    const urlAdd = `${this.url}/usuarios`;
    return this.http.post<boolean>(urlAdd, createUsuario);
  }

  addLibroToUsuario(idUsuario: number, libro: Libro): Observable<boolean> {
    // Obtener el usuario por ID
    return this.getUsuarioPorId(idUsuario).pipe(
      // Utilizar switchMap para combinar la respuesta del primer observable con otro observable
      switchMap((usuario: Usuario) => {
        // Verificar si el usuario se obtuvo correctamente
        if (usuario) {
          // Agregar el libro al usuario
          usuario.reservas.push(libro);

          // Actualizar el usuario con el nuevo libro
          return this.editUsuario(idUsuario, usuario);
        } else {
          // Si no se obtiene el usuario, retornar un observable de false
          return of(false);
        }
      })
    );
  }

  editUsuario(id: number, updateUsuario: Usuario): Observable<boolean> {
    const urlEdit = `${this.url}/usuarios/${id}`;
    console.log(updateUsuario);
    console.log(urlEdit);
    return this.http.put<boolean>(urlEdit, updateUsuario);
  }

  deleteUsuario(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/usuarios/${id}`)
      .pipe(
        map(resp => true),
        catchError(error => of(false))
      );
  }

  getUsuarioToAuth(email: string, password: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/usuarios?email=${email}&password=${password}`);
  }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.url}/libros`);
  }

  getLibroData(id: number): Observable<Libro> {
    const url = `${this.url}/libros/${id}`;
    return this.http.get<Libro>(url);
  }

  getLibroBuscar(nombre: string): Observable<Libro[]> {
    const url = `${this.url}/libros?nombre=${nombre}`;
    return this.http.get<Libro[]>(url);
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


  getConsultas(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${this.url}/consultas`);
  }

  addConsulta(createConsulta: Consulta): Observable<boolean> {
    const urlAdd = `${this.url}/consultas`;
    return this.http.post<boolean>(urlAdd, createConsulta);
  }

  deleteConsulta(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/consultas/${id}`)
      .pipe(
        map(resp => true),
        catchError(error => of(false))
      );
  }

}
