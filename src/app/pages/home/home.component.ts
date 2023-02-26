import { CinemaService } from './../../core/services/cinemas/cinema.service';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movies/movie.service';
import { Movie } from 'src/app/core/services/movies/movie.model';
import { Cinema } from 'src/app/core/services/cinemas/cinema.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allmovies:Movie[]=[];
  public lmovies:Movie[]=[];
  public lcinemas:Cinema[]=[];  
  public BYDEFAULTSELECT="-- Selecciona un cine--"


  //Metemos en el constructor el servicio que recoge los datos transformados de las películas y cines del API.
  constructor(private moviesService: MovieService, private cinemaService: CinemaService){    
  }

  //Recogemos el listado de películas y cines existentes en el API 

  public ngOnInit(): void {
    this.cinemaService.getCinema().subscribe((value)=>this.lcinemas=value)  
    this.moviesService.getMovies().subscribe((value)=>{this.allmovies=value})      
  }

  //Pintamos las películas existentes en el cine seleccionado por el usuario. La primera vez no se muestra ninguna película
  //sino la información general de la web. Posteriormente, si no se selecciona un cine y se selecciona la opción por defecto, 
  //se muestran todas las películas.
  public updateCinemas(selection:string):void{       
    const currentCinema= this.lcinemas.find(cinema=>{return cinema.name==selection});    

    if ((!currentCinema) || (currentCinema.name==this.BYDEFAULTSELECT))
      this.lmovies=this.allmovies
    else this.lmovies=currentCinema.movies;
  }

}



