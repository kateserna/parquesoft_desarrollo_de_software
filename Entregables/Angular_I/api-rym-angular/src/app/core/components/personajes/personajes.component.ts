import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { RymService } from '../../services/rym.service';

@Component({
  selector: 'app-personajes',
  imports: [MaterialModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit{

  personajes: any[] = []

  constructor(private rymService: RymService){}

  ngOnInit(): void {
    this.rymService.obtenerPersonajes().subscribe(( data: any) => {
      console.log(data)
      this.personajes = data.results
    })
  }
}
