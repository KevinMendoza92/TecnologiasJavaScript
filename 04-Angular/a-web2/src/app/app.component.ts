import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: UsuarioInterface = {
    nombre: "",
    apellido: "Mendoza"
  };

  url:String="https://angular.io";
  src:String="https://angular.io/resources/images/logos/angular/angular.png";
/*
  constructor(){
    console.log("Constructor");
    this.holaMundo();
    console.log(this.saludar(this.usuario.nombre, this.usuario.apellido));
  };*/

  constructor(){
    this.usuario.nombre = "Kev";
    this.parrafo="hola hola";
    setTimeout(()=>{
      this.usuario.nombre="Kevin"
    },3000);
  }
  parrafo:String = "";
  background:String ="blue";

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
