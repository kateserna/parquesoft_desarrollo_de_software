import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorldComponent } from '../world/world.component';

@Component({
  selector: 'app-hello',
  imports: [FormsModule, WorldComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  nombre: string = '';

  listaNombres = [
    {
      nombre: 'Juan',
      apellido: 'Perez'
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez'
    },
    {
      nombre: 'Pedro',
      apellido: 'Gonzalez'
    }
    ]

}
