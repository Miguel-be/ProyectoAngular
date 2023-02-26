import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MovieComponent } from './components/movie/movie.component';
import { FormsModule } from '@angular/forms';
//Como sólo tenemos un select, no se utilia formulario reactivo.

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
