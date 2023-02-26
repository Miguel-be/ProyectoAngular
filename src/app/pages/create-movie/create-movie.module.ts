import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMovieRoutingModule } from './create-movie-routing.module';
import { CreateMovieComponent } from './create-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
//Se incluye ReactiveFormsModule para trabajar con el formulario reactivo

@NgModule({
  declarations: [
    CreateMovieComponent
  ],
  imports: [
    CommonModule,
    CreateMovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateMovieModule { }
