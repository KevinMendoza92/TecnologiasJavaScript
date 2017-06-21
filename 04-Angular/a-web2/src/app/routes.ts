import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "../../../a-web/src/app/Componentes/inicio/inicio.component";
import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
import {Pagina21Component} from "./Componentes/pagina21/pagina21.component";
import {Pagina22Component} from "./Componentes/pagina22/pagina22.component";
import {Pagina23Component} from "./Componentes/pagina23/pagina23.component";
/**
 * Created by USRDEL on 21/6/17.
 */

export const routes: Routes =[
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"page2",
    component:Pagina2Component,
    children:[
      {
        path:"pagina21",
        component:Pagina21Component
      },
      {
        path:"pagina22",
        component:Pagina22Component
      },
      {
        path:"pagina23",
        component:Pagina23Component
      }
    ]
  }
];

export const ModuloDeRutas:ModuleWithProviders=RouterModule.forRoot(routes);
