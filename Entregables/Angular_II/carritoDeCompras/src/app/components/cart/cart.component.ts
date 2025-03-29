import { Component, computed, OnInit, signal } from '@angular/core';
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
export class CartComponent implements OnInit {
  listaProductos: Producto[] = [];
  constructor(private productosService: ProductosService) {}

  //variables para paginado
  readonly firstPage = 1;
  itemsPerPage = 20; //items por pagina
  currentPage = signal(this.firstPage); //control del paginado
  startIndex = 0;
  endIndex = 0;

  ngOnInit(): void {
    this.allProducts(); //llamo a la funcion que me trae los productos
  }

  isNextPageNotAvailable(){
    if (this.listaProductos.length === 0) {
      return false; // Botón de siguiente disponible
    }
    return this.currentPage() >= Math.floor(this.listaProductos.length / this.itemsPerPage) + 1
  }

  //me devuelve los productos de la tabla a traves del servicio
  allProducts() {
    this.productosService.getAllProducts().subscribe((data: any) => {
      this.listaProductos = data;
      this.startIndex = (this.currentPage() - 1) * this.itemsPerPage;
      this.endIndex = this.startIndex + this.itemsPerPage;
    });
    return this.listaProductos.slice(this.startIndex, this.endIndex);
  }

  //ir a la pagina anterior
  goToPrevPage(){
    this.currentPage.update( currentPage => Math.max(currentPage - 1, 1))
  }

  //ir a la pagina siguiente 
  goToNextPage(){
    this.currentPage.update( currentPage => Math.min(currentPage + 1, Math.floor(this.listaProductos.length / this.itemsPerPage) + 1))
  }
  
























  
  //--------- formulario para crear producto -------------
  title = ('');
  description = ('');
  price = (0);
  discountPercentage = (0);
  rating = (0);
  stock = (0);
  brand = ('');
  category = ('');
  thumbnail = ('');

  //metodo para crear un producto
  addProduct() {
    const newProduct: Producto = {
      id: this.listaProductos.length + 1,
      title: this.title,
      description: this.description,
      price: this.price,
      discountPercentage: this.discountPercentage,
      rating: this.rating,
      stock: this.stock,
      brand: this.brand,
      category: this.category,
      thumbnail: this.thumbnail
    };
    this.productosService.createProduct(this.listaProductos).subscribe((data: any) => {
      console.log("Producto creado:", data);
      /*
      this.listaProductos.update((data) => {
        const newProduct = {
          title: this.title,
          description: this.description,
          price: this.price,
          discountPercentage: this.discountPercentage,
          rating: this.rating,
          stock: this.stock,
          brand: this.brand,
          category: this.category,
          thumbnail: this.thumbnail
        };
        return[...this.listaProductos, newProduct];
      }
    ) //(historial:Producto[])*/
    })
  }

  //--------- boton de busqueda y filtrado -------------

  //eliminar variable no se va a usar
  searchInput = signal(''); //señal del campo de busqueda

  //eliminar metodo: no se usa
  filterProducts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    
    return this.listaProductos
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
  productos = signal<Producto[]>(this.listaProductos); //señal con la lista de productos
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
