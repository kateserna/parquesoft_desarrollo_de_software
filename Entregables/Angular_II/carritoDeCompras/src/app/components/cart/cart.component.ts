import { Component, computed, signal } from '@angular/core';
import { products } from './products';
import { Dialog } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';


interface Producto {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string
}

@Component({
  selector: 'app-cart',
  imports: [
    Dialog,
    CardModule, 
    ButtonModule, 
    InputTextModule, 
    FormsModule, 
    FloatLabel, 
    TableModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  readonly firstPage = 1;
  itemsPerPage = 5; //items por pagina

  searchInput = signal(''); //señal del campo de busqueda
  currentPage = signal(this.firstPage); //control del paginado

  isNextPageNotAvailable = computed(() => {
    const filterProducts = products
      .filter( product => product.title.toLowerCase().includes( this.searchInput().toLowerCase()))
      return filterProducts.length < (this.currentPage() +1) * this.itemsPerPage;
  })

  filterProducts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    
    return products
      .filter( product => product.title.toLowerCase().includes( this.searchInput().toLowerCase()))
      .slice(startIndex, endIndex);
  });

  searchProduct(searchText: string) {
    this.searchInput.set(searchText);
    if (this.currentPage() > this.firstPage) { 
      this.currentPage.set(this.firstPage);
    }
  }

  //ir a la pagina anterior
  goToPrevPage(){
    this.currentPage.update( currentPage => Math.max(currentPage - 1, 1))
  }

  //ir a la pagina siguiente 
  goToNextPage(){
    this.currentPage.update( currentPage => Math.min(currentPage + 1, this.itemsPerPage + 1))
  }
//--------- boton de carrito de compras y dialog (carrito de compras)-------------
  visible: boolean = false;

  productos = signal<Producto[]>(products); //señal con la lista de productos
  cart = signal<Producto[]>([]); //carrito de compras donde voy guardando los productos, inicia en 0

  totalPrice = computed(() => {
    return this.cart().reduce( (acc, curr) => acc + curr.price, 0);
  });

  selectedProductsIds = computed(() => {
    return this.cart().map( (producto) => producto.id);
  });

  removeFromCart(producto: Producto) {
    this.cart.update( (prts) => {
      return prts.filter( (i) => i.id !== producto.id );
    });
  }

  addToCart(producto: Producto) {
    this.cart.update( productos => [...productos, producto]);
  }
  
  showDialog() {
  this.visible = true;
  }


}

