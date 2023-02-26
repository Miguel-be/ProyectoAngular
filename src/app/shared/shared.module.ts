import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPipe } from './pipes/select.pipe';

//Se declara el módulo compartido con el pipe declarado.
@NgModule({
  declarations: [
    SelectPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SelectPipe
  ]
})
export class SharedModule { }
