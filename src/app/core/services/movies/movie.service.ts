import { Injectable } from '@angular/core';
import { ApiMoviesService } from './api/api-movies.service';
import { ApiMovie } from './api/api-movie.model';
import { Movie } from './movie.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiMoviesService:ApiMoviesService) { }

  //Llamada al método Get de nuestra aplicación que devuelve un observable con los datos de las películas 
  //existente en nuestra API como actualmente los datos que usamos en la aplicación son los mismos que nos
  //viene del API, no transformamos los datos.
  public getMovies(): Observable<Movie[]>{
    return this.apiMoviesService.getApiMovies().pipe(
      map((apiMovie: ApiMovie[])=> {return apiMovie})
    )
  }

  //Llamada al método Get de nuestra aplicación que devuelve un observable con la película de nuestra API 
  //con el mismo id que el pasado por parámetro
  public getMoviesById(id:string): Observable<Movie>{
    return this.apiMoviesService.getApiIdMovie(id).pipe(
      map((apiMovie: ApiMovie)=> {return apiMovie})
    )
  }

  //Llamada al método Post de nuestra aplicación que devuelve un observable con la película creada en nuestro
  //API
  public postMovies(body:FormData): Observable<Movie>{
    return this.apiMoviesService.postApiMovie(body).pipe(
      map((apiMovie: ApiMovie)=> {return apiMovie})
    )
  }

  //Llamada al método Put de nuestra aplicación que devuelve un observable con la película editada en nuestra
  //API. Se pasa por parámetro el id de la película y la información de la misma.
  public editMovie(id:string, body:FormData): Observable<Movie>{
    return this.apiMoviesService.putApiMovie(id, body).pipe(
      map((apiMovie: ApiMovie)=> {return apiMovie})
    )
  }

  //Servicio igual que el anterior pero no actualiza la imagen
  public editMovieNoCover(id:string, body:Movie): Observable<Movie>{
    return this.apiMoviesService.putApiMovieNoCover(id, body).pipe(
      map((apiMovie: ApiMovie)=> {return apiMovie})
    )
  }

  //Llamada al método Delete de nuestra aplicación que devuelve un observable con la película que se borra
  //del API. Se pasa por parámetro el id de la película que se quiere borrar
  public deleteMovie(id:string): Observable<Movie>{
    return this.apiMoviesService.deleteApiMovie(id).pipe(
        map((apiMovie: ApiMovie)=> {return apiMovie})
      )
  }


}





