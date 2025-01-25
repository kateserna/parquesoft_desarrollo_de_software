import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RymService {
  private URLBase = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  obtenerPersonajes(){
    return this.http.get(`${this.URLBase}/character`)
  }

  obtenerUnPersonaje(id: string){
    return this.http.get(`${this.URLBase}/character/${id}`)
  }
}
