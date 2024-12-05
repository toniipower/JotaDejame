import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  mensaje = 'Mi proyecto en Angular 16 servido desde docker <br> Antonio';
  cuerpo = 'En un lugar de la mancha...';
}
