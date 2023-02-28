import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'pipesApp';

  nombre: string = 'Akira';
  valor: number = 1999;
  obj = {
    nombre: 'Jhon',
  };

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
  }
}
