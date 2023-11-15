import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  get(): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.url}/noticias`);
  }

  post(news: Noticia): Observable<boolean> {
    const urlAdd = `${this.url}/noticias`;
    return this.http.put<boolean>(urlAdd, news);
  }

}
