import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitmovieGuard } from 'src/app/core/guards/exitmovie.guard';
import { CreateMovieComponent } from './create-movie.component';

//Se carga el Componente CreateMovieComponent en lazy load y se establece la guardia de salida ExitmovieGuard para avisar al usuario
//cuando intenta salir de la página sin completar el formulario.
const routes: Routes = [
  {
    path:"",
    component: CreateMovieComponent,
    canDeactivate:[ExitmovieGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMovieRoutingModule { }
