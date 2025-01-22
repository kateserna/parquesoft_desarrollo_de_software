import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MaterialModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
