import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { RymService } from '../../services/rym.service';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-personajes',
  imports: [MaterialModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit{

  personajes: any[] = []
  url_prev: string | null = '';
  url_next: string | null = '';

  constructor(private rymService: RymService){}

  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.changePage('');
    
  }

  changePage(url: string | null){
    this.rymService.obtenerPersonajes(url).subscribe(( data: any) => {
      this.personajes = data.results
      this.url_prev = data.info.prev
      this.url_next = data.info.next
    })
  }

  openDialog(character:any):void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        name:character.name, 
        image:character.image, 
        type:character.type, 
        origin:character.origin.name, 
        location:character.location.name,
      }
    });
  }

}
