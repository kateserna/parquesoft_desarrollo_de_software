import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './core/components/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'material';
}