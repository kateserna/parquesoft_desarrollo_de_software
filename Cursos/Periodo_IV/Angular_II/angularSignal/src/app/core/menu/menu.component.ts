import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';


@Component({
  selector: 'app-menu',
  imports: [Menubar],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  //van a ser los items del menu
  items: MenuItem[] | undefined; //tipo de dato MenuItem y recibe un array de objetos que se usan para configurar el menu

  //en el OnInit vamos a setear el menu, creamos los items del menu
  ngOnInit() {
    this.items = [
        {
            label: 'Home', //lo que va a decir el menu
            icon: 'pi pi-home' //icono que va a tener
        },
        {
            label: 'Ejemplos de señales',
            icon: 'pi pi-star',
            items: [
              {
                label: 'Ejemplo 1',
                icon: 'pi pi-wave-pulse',
                routerLink: 'ejemplo1'
              },
              {
                label: 'Ejemplo 2',
                icon: 'pi pi-wave-pulse',
                routerLink: 'ejemplo2'
              },
              {
                label: 'Ejemplo 3',
                icon: 'pi pi-wave-pulse',
                routerLink: 'ejemplo3'
              },
              {
                label: 'Ejemplo 4',
                icon: 'pi pi-wave-pulse',
                routerLink: 'ejemplo4'
              }

            ]
        },
    ]
  }
}
