import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-material-test',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './material-test.component.html',
  styleUrl: './material-test.component.css'
})
export class MaterialTestComponent {

}
