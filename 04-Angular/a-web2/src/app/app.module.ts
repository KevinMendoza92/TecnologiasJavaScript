import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EstilosComponent } from './estilos/estilos.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { ClimateComponent } from './Componentes/climate/climate.component';
import { DiameterComponent } from './Componentes/diameter/diameter.component';
import { GravityComponent } from './Componentes/gravity/gravity.component';
import { StarWarsComponent } from './Componentes/star-wars/star-wars.component';
@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent, InicioComponent, PlanetaStarWarsComponent, ClimateComponent, DiameterComponent, GravityComponent, StarWarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
