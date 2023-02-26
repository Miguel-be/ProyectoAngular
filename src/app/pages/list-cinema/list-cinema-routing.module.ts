import { ListCinemaComponent } from './list-cinema.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //Cargamos el componente List-Cinema al acceder a la página del módulo con Lazy Load
    {
      path: '',
      component: ListCinemaComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCinemaRoutingModule { }
