import { MovieDetailComponent } from './movie-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se utiliza el componente MovieDetail para el lazy load del módulo
const routes: Routes = [
  {
    path:"",
    component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailRoutingModule { }
