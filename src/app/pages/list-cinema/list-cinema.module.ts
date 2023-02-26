import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCinemaRoutingModule } from './list-cinema-routing.module';
import { ListCinemaComponent } from './list-cinema.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { SharedModule } from 'src/app/shared/shared.module';

//Se importa el módulo Shared ya que contiene la pipe de filtrado que se usa en el listado de cines.
//Se importa también el FormsModule en lugar de Reactive ya que sólo hay un campo de texto de búsqueda.
@NgModule({
  declarations: [
    ListCinemaComponent,
    CinemaComponent
  ],
  imports: [
    CommonModule,
    ListCinemaRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ListCinemaModule { }
