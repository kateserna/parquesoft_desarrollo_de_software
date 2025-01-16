import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorldComponent } from '../world/world.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hello',
  imports: [FormsModule, WorldComponent, RouterLink],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  nombre: string = '';
  mensajeDelHijo: string = '';

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

    //metodo
    onEmit(mensaje: string) {
      this.mensajeDelHijo = mensaje;
      window.alert('Mensaje recibido desde el hijo: ' + mensaje); //generamos una alerta
    }
}
