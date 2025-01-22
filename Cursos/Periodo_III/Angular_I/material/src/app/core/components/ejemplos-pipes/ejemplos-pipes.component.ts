import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-ejemplos-pipes',
  imports: [
    MaterialModule, 
    CurrencyPipe, 
    DatePipe, 
    UpperCasePipe,
    DecimalPipe
  ],
  templateUrl: './ejemplos-pipes.component.html',
  styleUrl: './ejemplos-pipes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush  
})

export class EjemplosPipesComponent {
  //objeto persona
  producto = {
    nombre: "iPhone X",
    precio: "100.99"
  }

  //objeto producto
  persona = {
    nombre: "Andres Calamaro",
    fechaNacimiento: "1985-05-20"
  }

}
