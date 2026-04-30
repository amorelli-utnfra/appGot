import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, Signal } from '@angular/core';
import { GotService } from '../services/got.service';
import { Personaje } from '../models/personaje.model';
import { Subscription } from 'rxjs';
import { HoverZoomDirective } from '../directivas/hover-zoom.directive';
import { IsStarkDirective } from '../directivas/is-stark.directive';

@Component({
  selector: 'app-tabla-personajes',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, HoverZoomDirective, IsStarkDirective],
  templateUrl: './tabla-personajes.component.html',
  styleUrl: './tabla-personajes.component.scss'
})
export class TablaPersonajesComponent implements OnInit, OnDestroy {

  personajes: Personaje[] = [];
  @Output() personajeSeleccionado = new EventEmitter<Personaje>();
  sumaGot: number = 0;
  subscripcion!: Subscription;
  mostrar: boolean = false;

  gotService = inject(GotService);

  constructor() {
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes() {
    this.subscripcion = this.gotService.getPersonajes()
      .subscribe(
        {
          next: (data: Personaje[]) => {
            this.personajes = data;
          },
          error: (error) => {
            console.error('Error al obtener los personajes', error);
          },
          complete: () => {
            console.log('Petición completada');
          }

        }
      );
  }

  seleccionarPersonaje(personaje: any) {
    this.personajeSeleccionado.emit(personaje);
  }


}
