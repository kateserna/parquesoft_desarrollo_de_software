import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URLBase = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  //obterner todos los productos
  getAllProducts(){
    return this.http.get(`${this.URLBase}`);
  }

  //crear un producto
  createProduct(producto: any){
    console.log("Producto creado:", producto);
    return this.http.post(this.URLBase, producto);
  }

}
