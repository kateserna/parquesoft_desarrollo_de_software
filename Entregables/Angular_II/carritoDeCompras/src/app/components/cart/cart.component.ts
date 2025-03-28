import { Component, computed, signal } from '@angular/core';
import { products } from '../../components/cart/products';
import { Dialog } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { ProductosService } from '../../core/services/productos.service';


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

  listaProductos: Producto[] = [];
  constructor(private productosService: ProductosService) {}

  //variables para paginado
  readonly firstPage = 0;
  itemsPerPage = 20; //items por pagina
  currentPage = signal(this.firstPage); //control del paginado

  ngOnInit(): void {
  }

  //me devuelve los productos de la tabla a traves del servicio
  allProducts = computed(() => {
    this.productosService.getAllProducts().subscribe((data: any) => {
      this.listaProductos = data;
    });
    
    console.log('currentPage:', this.currentPage());
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    console.log('startIndex:', startIndex);
    const endIndex = startIndex + this.itemsPerPage;
    console.log('endIndex:', endIndex);
    console.log('listaProductos:', this.listaProductos);
    return this.listaProductos.slice(startIndex, endIndex);
  })

  //ir a la pagina anterior
  goToPrevPage(){
    this.currentPage.update( currentPage => Math.max(currentPage - 1, 1))
  }

  //ir a la pagina siguiente 
  goToNextPage(){
    this.currentPage.update( currentPage => Math.min(currentPage + 1, this.itemsPerPage + 1))
  }

  //--------- boton de paginado y tabla -------------
  

  //eliminar variable no se va a usar
  searchInput = signal(''); //señal del campo de busqueda
  

  isNextPageNotAvailable = computed(() => {
    const filterProducts = this.listaProductos
      //.filter( product => product.title.toLowerCase().includes( this.searchInput().toLowerCase()))
      return filterProducts.length < (this.currentPage() +1) * this.itemsPerPage;
  })

  //eliminar metodo: no se usa
  filterProducts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    
    return products
      .filter( product => product.title.toLowerCase().includes( this.searchInput().toLowerCase()))
      .slice(startIndex, endIndex);
  });

  //eliminar metodo: no se usa
  searchProduct(searchText: string) {
    this.searchInput.set(searchText);
    if (this.currentPage() > this.firstPage) { 
      this.currentPage.set(this.firstPage);
    }
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

