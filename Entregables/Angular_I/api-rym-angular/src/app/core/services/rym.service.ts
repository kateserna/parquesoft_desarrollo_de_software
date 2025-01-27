import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  private URLBase = 'https://rickandmortyapi.com/api'

  constructor( private http: HttpClient) { }

  obtenerPersonajes(url_a:string | null){
    if (url_a == '' || url_a == null)
      return this.http.get(`${this.URLBase}/character`)
    else
      return this.http.get(url_a)
  }

}
