import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCinemaRoutingModule } from './create-cinema-routing.module';
import { CreateCinemaComponent } from './create-cinema.component';
import { ReactiveFormsModule } from '@angular/forms';

//Se importa ReactiveFormsModule para poder utilizar el formulario reactivo

@NgModule({
  declarations: [
    CreateCinemaComponent
  ],
  imports: [
    CommonModule,
    CreateCinemaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateCinemaModule { }
