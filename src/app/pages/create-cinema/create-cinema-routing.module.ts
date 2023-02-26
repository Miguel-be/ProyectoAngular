import { CreateCinemaComponent } from './create-cinema.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from 'src/app/core/guards/exit.guard';

const routes: Routes = [
//Cargamos el componente HomeComponent al acceder a la página del modulo
  {
    path: '',
    component: CreateCinemaComponent,
    canDeactivate:[ExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCinemaRoutingModule { }
