import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  imports: [FormsModule],
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  palabra: string = '';

  palindromo(esPalindroma: string) {
    this.palabra = esPalindroma;
    
  

  }

}
