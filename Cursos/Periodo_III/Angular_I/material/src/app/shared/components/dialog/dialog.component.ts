import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  } from '@angular/material/dialog';
import { DialogData } from '../observables/observables.component';
import { MaterialModule } from '../../material/material.module';
  

@Component({
  selector: 'app-dialog',
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, 
    MaterialModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})

export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>); //referencia del dialog
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);//data
  readonly animal = this.data.animal;//animal que deberia llegar desde la data

  //Cierra el dialog
  onNoClick(): void {
    this.dialogRef.close();
  }
}
