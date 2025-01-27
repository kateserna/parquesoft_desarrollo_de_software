import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
