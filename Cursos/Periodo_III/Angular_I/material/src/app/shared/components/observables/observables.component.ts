import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {  MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

//Definicion de mis propios tipos de datos con interfaz Data dialog
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-observables',
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit{
  
  //observableIntervalo = interval(1000);
  //contador = 0;

  animal = '';
  name = '';
  readonly dialog = inject(MatDialog); //inyeccion de dependencias/inyeccion dinamica

  //funcion que abre el dialog y contiene la referencia al dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El dialogo fue cerrado con la data: ', result);
      if (result !== undefined) {
        this.animal = result;
      }
    });
  }

  ngOnInit(): void {
    // this.observableIntervalo.subscribe( valor => {
    //   console.log(valor)
    //   this.contador = valor;
    // });
  }
}

