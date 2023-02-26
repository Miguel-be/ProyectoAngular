import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se carga el LoginComponent en el Lazy load del módulo
const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
