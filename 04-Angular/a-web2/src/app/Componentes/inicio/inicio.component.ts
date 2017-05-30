import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Kevin";
  //comand+a y luego command command+alt+l
  arregloUsuario = [
    {
      nombre: "Kevin",
      apellido: "Mendoza"
    }, {
      nombre: "dssd",
      apellido: "Cofsd"
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  //sintaxis de tipo void
  cambiarNombre(): void {
    this.nombre = "Rafico a Lenin ";
  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico"
  }

  cambianNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }


}
