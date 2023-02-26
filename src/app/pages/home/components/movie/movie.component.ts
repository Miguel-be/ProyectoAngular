import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/services/movies/movie.model';
import { ApiWikiService } from 'src/app/core/services/wikipedia/api/api-wiki.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() public movie?:Movie;
  //Desde la home nos dan la información de la película seleccionada por el usuario 
  constructor(private router:Router){}
  //Este procedimiento navega al detalle de la película.
  public moreInfo():void{    
    if (!this.movie) return;   
    this.router.navigate(["pelicula-detalle", this.movie._id])}
}

