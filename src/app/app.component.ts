import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaPersonajesComponent } from './tabla-personajes/tabla-personajes.component';
import { CartaPersonajeComponent } from './carta-personaje/carta-personaje.component';
import { Personaje } from './models/personaje.model';
import { NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgTemplateOutlet, TablaPersonajesComponent, CartaPersonajeComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  personajeSeleccionado!: Personaje;


}
