import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Kevin";

  planetas=[];
  /*planetas[planetaStarWars]=[]
  interface planetaStarWars{
    name: string,....etc
}*/
  //comand+a y luego command command+alt+l
  arregloUsuario = [
    {
      nombre: "Kevin",
      apellido: "Mendoza",
      conectado: true
    }, {
      nombre: "K",
      apellido: "M",
      conectado: true
    }, {
      nombre: "E",
      apellido: "R",
      conectado: true
    }
  ]

  constructor(private _http: Http) {
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

  //el _(ejemplo) significa que es privado
  cargarPlanetas(){
    this._http.get("swapi.co/api/planets")

      //.map(response=>response.json())
      .subscribe(
        (response)=>{
          console.log("Response", response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.planetas=respuesta.result;
        },
        (error)=>{
          console.log("error", error);
        },
        ()=>{
          console.log("finally");
        }
      )
  }



}
