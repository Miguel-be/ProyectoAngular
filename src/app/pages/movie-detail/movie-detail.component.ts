import { Wiki } from './../../core/services/wikipedia/wiki.model';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/core/services/movies/movie.model';
import { MovieService } from 'src/app/core/services/movies/movie.service';
import { map, switchMap } from 'rxjs';
import { WikiService } from 'src/app/core/services/wikipedia/wiki.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{
  public movie?:Movie;
  public movieId:string="";  
  public directorDescription?:string="";
  public activate:boolean=false;
  public isLogged: boolean = false;

  //Recogemos el id de la ruta ya que es el identificador de la película. Hacemos una llamada al API con el id de la película
  //para recoger la información de la misma. Con el objetivo de concatenar 2 llamadas a 2 APIs distintas, usamos un switchMap
  //en el que una vez que una vez que recogemos la información de la película hacemos una llamada al API de wikipedia para recoger 
  //la información que se almacena en este repositorio sobre el director.
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService, 
              private router:Router, private wiki:WikiService, private auth:AuthService)
  {
    this.activatedRoute.params.subscribe((value)=>
     { this.movieId= value["id"];      
       this.movieService.getMoviesById(this.movieId).pipe(
        map((movie)=> this.movie=movie),
        switchMap((movie)=> {return this.wiki.getDirector(movie.director)})
       ).subscribe((wiki:Wiki)=>this.directorDescription=wiki.extract)
    })
  }

  //Al iniciar el formulario recogemos el flag que nos indica si el usuario está identificado.
  public ngOnInit(): void {
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }

  //Se lanza cuando el usuario pulsa el botón Editar y navega al formulario de crear / editar película con 
  //el id de la película en el queryparams
  public editMovie():void
  {       
    if (!this.movie) return;
    this.router.navigate(["nueva-pelicula"], {queryParams:{id:this.movie._id}})    
  }

  //Se lanza cuando el usuario pulsa el botón Eliminar. Se llama al servicio de borrado y una vez eliminada la
  //película se navega al inicio
  public deleteMovie():void
  {       
    if (!this.movie) return;
    this.movieService.deleteMovie(this.movie._id).subscribe((m)=>
       {alert("Se ha eliminado correctamente");this.router.navigate(["inicio"])})
  }

  //Activa el enlace para mostrar la información del Director de la película que muestra la wikipedia
  public activateAction():void{
    this.activate=!this.activate
  }
  
}




