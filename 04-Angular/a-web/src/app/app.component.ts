import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  template: `
  <h1>Hola</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: UsuarioInterface = {
    nombre: "Kevin",
    apellido: "Mendoza"
  }

  constructor(){
    console.log("Constructor");
    this.holaMundo();
  }
  holaMundo(){
    console.log("Hola mundo");
  }
  saludar(nombre: String,
          apellido?:String):String{
    return `Hola ${nombre} ${apellido}`;
  }
}

interface  UsuarioInterface{
  nombre : String,
  apellido : String
}
