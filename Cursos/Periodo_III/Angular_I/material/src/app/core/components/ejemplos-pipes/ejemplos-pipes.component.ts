import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { CapicuaPipe } from '../../pipes/capicua.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplos-pipes',
  imports: [
    MaterialModule, 
    CurrencyPipe, 
    DatePipe, 
    UpperCasePipe,
    DecimalPipe,
    CapicuaPipe,
    FormsModule
  ],
  templateUrl: './ejemplos-pipes.component.html',
  styleUrl: './ejemplos-pipes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush  
})

export class EjemplosPipesComponent implements OnInit, OnDestroy{
  
  ngOnDestroy(): void {
    //Desuscribirse de observables
    console.log('Componente destruido')
  }
  
  ngOnInit(): void {
    //Realizar llamadas al servidor
    console.log('Componente inicializado')
  }

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

  palabra = '';

}
