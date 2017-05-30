import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre:string = "Kevin";

  constructor() { }

  ngOnInit() {
  }
  //sintaxis de tipo void
  cambiarNombre():void{
    this.nombre="Rafico a Lenin ";
  }
  cambiarOtroNombre(){
    this.nombre="Lenin a Rafico"
  }


}
