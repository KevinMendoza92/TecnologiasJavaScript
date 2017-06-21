
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  nombre: String = 'Kevin';
  usuarios: UsuarioClass[] = [];
  nuevoUsuario: UsuarioClass = new UsuarioClass("");
  planetas: any[]=[];
  // cmmand + a y luego command + alt + l
  arregloImagenes = [
    'https://vignette1.wikia.nocookie.net/es.starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830',
    'https://vignette4.wikia.nocookie.net/es.starwars/images/a/a0/Eaw_Yavin4.jpg/revision/latest?cb=20080127231835',
    'https://vignette4.wikia.nocookie.net/es.starwars/images/8/80/Hoth2.jpg/revision/latest?cb=20070317174056',
    'https://vignette1.wikia.nocookie.net/es.starwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20061117132132',
    'https://vignette1.wikia.nocookie.net/es.starwars/images/8/80/Bespin_TESB.png/revision/latest?cb=20170528000216',
    'https://vignette1.wikia.nocookie.net/es.starwars/images/e/e1/Endor2.JPG/revision/latest?cb=20130907135939',
    'https://vignette4.wikia.nocookie.net/es.starwars/images/5/50/Naboo.jpg/revision/latest?cb=20060318190228',
    'https://vignette3.wikia.nocookie.net/es.starwars/images/1/17/Coruscant-AoTCW.jpg/revision/latest?cb=20100213220520',
    'https://vignette2.wikia.nocookie.net/es.starwars/images/5/52/Kamino-DB.png/revision/latest?cb=20160913200828',
    'https://vignette2.wikia.nocookie.net/es.starwars/images/6/6d/Geonosis_AotC.png/revision/latest?cb=20161025214407'
  ];

  /*planetas[planetaStarWars]=[]
   interface planetaStarWars{
   name: string,....etc
   }*/
  //comand+a y luego command command+alt+l

  arregloUsuario = [{
    nombre: 'Kevin',
    apellido: 'Mendoza',
    conectado: true
  },
    {
      nombre: 'K',
      apellido: 'M',
      conectado: true
    },
    {
      nombre: 'E',
      apellido: 'R',
      conectado: false
    }];

  constructor(private _http: Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!
  }

  ngOnInit() {
    //Esta listo el componente
    this._http.get('http://localhost:1337/usuario/')
      .subscribe(
        respuesta => {
          let respJson:UsuarioClass[]= respuesta.json();
          console.log("respuesta json:", respJson);
          this.usuarios=respJson.map(
            (usuario:UsuarioClass)=>{
            //cambiar el usuario
              usuario.editar=false;
              return usuario;
              /*
              //añadir propiedades a objetos
              let objeto1={
                prop1:1,
                prop2:2
              }
              objeto1.prop3=3;*/
            }
          );
          console.log("Usuarios: ", this.usuarios);

        },
        error => {
          console.log("Error", error)
        }
      )
  }

  //sintaxis de tipo void
  cambiarNombre(): void {
    this.nombre = 'Rafico a Lenin';
  }

  cambiarOtroNombre(): void {
    this.nombre = 'Lenin a Rafico';
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }

  //el _(ejemplo) significa que es privado
  cargarPlanetas() {
    this._http
      .get('http://swapi.co/api/planets')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse);
          console.log(reponse.json());
          let repuesta = reponse.json();
          console.log(repuesta.next);
          this.planetas = repuesta.results;
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }
  /*
  crearUsuario() {
    console.log("Creo usuario");
    /*let usuario= {
     nombre: this.nuevoUsuario.nombre
     }*/
  /*
    this._http.post('http://localhost:1337/Usuario', this.nuevoUsuario)
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
          this.usuarios.push(respuestaJson);
        },
        error => {
          console.log("Error", error)
        }
      )
  }
  eliminarUsuario(id,i){

    this._http.delete("http://localhost:1337/usuario/"+id).subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.usuarios.splice(i,1);

    }, error=>{
      console.log("error: ", error);
    });
  }

actualirzarUsuario(usuario:UsuarioClass){
    let actualizacion = {
      nombre:usuario.nombre
    };
    this._http.put("http://localhost:1337/Usuario/"+usuario.id,actualizacion)
      .map(
        (res)=>{
          return res.json();
        })
      //snippet -> template de codigo para reutilizarlo
      .subscribe(
        res => {
          //el servidor nos dice que se actualizo
          console.log("El usuario se actualizo",res);
        },
        err => {
          //hubo algun problema(Red servidor)
          console.log("Hubo un error",err)
        })
}


}*/
/*
interface PlanetaStarWars {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}*/


  crearUsuario(){
    console.log("Entro a crear Usuario");
    /*
     let usuario = {
     nombre:this.nuevoUsuario.nombre
     };
     */

    this._http
      .post("http://localhost:1337/Usuario",this.nuevoUsuario)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json()
          this.usuarios.push(respuestaJson);
          this.nuevoUsuario = new UsuarioClass();
          console.log('respuestaJson: ',respuestaJson);
        },
        error=>{
          console.log("Error",error);
        }
      )

  }

  // este metodo se ejecuta con un evento del componente hijo

  //  (usuarioBorrado)="eliminarUsuario($event)"

  eliminarUsuarioFrontEnd(usuario:UsuarioClass){

    let indice = this.usuarios.indexOf(usuario);

    // Eliminando del arreglo

    this.usuarios.splice(indice,1);

  }


}
