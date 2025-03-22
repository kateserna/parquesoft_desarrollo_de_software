import { Component, computed, signal } from '@angular/core';
import { products } from './products';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ejemplo7',
  imports: [
    CardModule, 
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabel,
    TableModule
  ],
  templateUrl: './ejemplo7.component.html',
  styleUrl: './ejemplo7.component.scss'
})
export class Ejemplo7Component {
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
}