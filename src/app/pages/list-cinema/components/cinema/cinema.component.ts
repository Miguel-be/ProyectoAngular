import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/core/services/cinemas/cinema.model';
import { CinemaService } from 'src/app/core/services/cinemas/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
//Se recoge el input del cine seleccionado. 
export class CinemaComponent {
  @Input() public cinema?:Cinema;
  
  constructor(private cinemaService:CinemaService, private router:Router){}

  //Método para borrar un cine. Después de borrado se navega a la página de inicio
  public remove():void{    
    if (!this.cinema) return;
    this.cinemaService.deleteCinema(this.cinema._id).subscribe((value)=> {alert("Se ha borrado correctamente");this.router.navigate(["inicio"])}
    )
  }

 //Método que lleva a la página para editar la información de un cine. Se mete por parámetro el id del cine para poder
 //cargar sus datos. 
  public edit():void{    
    if (!this.cinema) return;
    this.router.navigate(["nuevo-cine"], {queryParams:{id:this.cinema?._id}}) 
    }
}
