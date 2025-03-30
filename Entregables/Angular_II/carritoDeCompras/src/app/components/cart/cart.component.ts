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
  id: string,
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
  listaProductos = signal<Producto[]>([]);
  constructor(private productosService: ProductosService) {}

  //variables para paginado
  readonly firstPage = 1;
  itemsPerPage = 20; //items por pagina
  currentPage = signal(this.firstPage); //control del paginado
  startIndex = 0;
  endIndex = 0;

  ngOnInit(): void {
    this.productosService.getAllProducts().subscribe((data: any) => {
      this.listaProductos.set(data);
    });
  }

  isNextPageNotAvailable(){
    if (this.listaProductos().length === 0) {
      return false; // Botón de siguiente disponible
    }
    return this.currentPage() >= Math.floor(this.listaProductos().length / this.itemsPerPage) + 1
  }

  //me devuelve los productos de la tabla a traves del servicio
  allProducts = computed(() => {
    this.startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + this.itemsPerPage;
    return this.listaProductos()
      .filter(product => product.title.toLowerCase().includes(this.search().toLowerCase()))
      .slice(this.startIndex, this.endIndex);
  });

  //ir a la pagina anterior
  goToPrevPage(){
    this.currentPage.update(currentPage => Math.max(currentPage - 1, 1))
  }

  //ir a la pagina siguiente 
  goToNextPage(){
    this.currentPage.update( currentPage => Math.min(currentPage + 1, Math.floor(this.listaProductos().length / this.itemsPerPage) + 1))
  }
  
  //--------- formulario para crear producto -------------
  id = ('');
  title2 = ('');
  description = ('');
  price = (0);
  discountPercentage = (0);
  rating = (0);
  stock = (0);
  brand = ('');
  category = ('');
  thumbnail = ('');

  setId(id: string) {
    this.id = id;
  }
  setTitle(title: string) {
    this.title2 = title;
  }
  setDescription(description: string) {
    this.description = description;
  }
  setPrice(price: number) {
    this.price = price;
  }
  setDiscountPercentage(discountPercentage: number) {
    this.discountPercentage = discountPercentage;
  }
  setRating(rating: number) {
    this.rating = rating;
  }
  setStock(stock: number) {
    this.stock = stock;
  }
  setBrand(brand: string) {
    this.brand = brand;
  }
  setCategory(category: string) {
    this.category = category;
  }
  setThumbnail(thumbnail: string) {
    this.thumbnail = thumbnail;
  }
  //metodo para limpiar el formulario
  clearForm() {
    this.id = '';
    this.title2 = '';
    this.description = '';
    this.price = 0;
    this.discountPercentage = 0;
    this.rating = 0;
    this.stock = 0;
    this.brand = '';
    this.category = '';
    this.thumbnail = '';
  }

  //metodo para crear un producto
  addProduct() {
    const newProduct : Producto= {
      id: this.id,
      title: this.title2,
      description: this.description,
      price: this.price,
      discountPercentage: this.discountPercentage,
      rating: this.rating,
      stock: this.stock,
      brand: this.brand,
      category: this.category,
      thumbnail: this.thumbnail
    };
    //verifico que el resultado de la peticion sea correcto
    const result = this.productosService.createProduct(newProduct).subscribe({
      next: (data: any) => {
      this.listaProductos.update((historial: Producto[]) => {
        return [...historial, newProduct];
        }
      );
      alert("Producto creado correctamente");
      this.clearForm(); //limpia el formulario
      },
      error: (err: any) => {
      alert("Error al crear el producto: " + err.error.message);
      }
    });
  }

  //--------- boton de busqueda y filtrado -------------
  search = signal('');

  searchProduct(searchText: string) {
    this.search.set(searchText);
    if (this.currentPage() > this.firstPage) { 
      this.currentPage.set(this.firstPage);
    }
  }

  //--------- boton de carrito de compras y dialog (carrito de compras)-------------
  visible: boolean = false;
  productos = signal<Producto[]>(this.listaProductos()); //señal con la lista de productos
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
