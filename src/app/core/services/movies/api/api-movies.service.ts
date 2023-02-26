import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMovie } from './api-movie.model';
import { Observable } from 'rxjs';
import { Movie } from '../movie.model';

//Ruta de nuestra API
const API_MOVIE_URL="https://proyecto-node-olive.vercel.app/movies";

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  constructor(private http:HttpClient) { }
  
  //Llamada al método Get del API usando la ruta declarada anteriormente como constante. Devuelve un observable
  //con el array de las películas existentes en el API
  public getApiMovies(): Observable<ApiMovie[]>{
    return this.http.get<ApiMovie[]>(`${API_MOVIE_URL}`)
  }

  //Llamada al método Get by Id del API usando la ruta declarada anteriormente como constante. Devuelve un 
  //observable con la pelicula del API con id pasado por parámetro
  public getApiIdMovie(id: string):Observable<ApiMovie>{
    return this.http.get<ApiMovie>(`${API_MOVIE_URL}/id/${id}`)
  }

 //Llamada al método Post del API usando la ruta declarada anteriormente como constante. Devuelve un observable
 //con la pelicula del API con pasado por parámetro
  public postApiMovie(body: FormData):Observable<ApiMovie>{    
    return this.http.post<ApiMovie>(`${API_MOVIE_URL}/with-uri`, body)
  }

 //Llamada al método Put del API usando la ruta declarada anteriormente como constante incluyendo el id de la
 //pelicula que se quiere editar. Devuelve un observable 
 public putApiMovie(id: string, body: FormData):Observable<ApiMovie>{    
  return this.http.put<ApiMovie>(`${API_MOVIE_URL}/edit-cover/${id}`, body)
}

 //Método igual que el anterior pero no actualiza la imagen cover.Devuelve como observable la película 
 //actualizada
 public putApiMovieNoCover(id: string, body: Movie):Observable<ApiMovie>{    
  return this.http.put<ApiMovie>(`${API_MOVIE_URL}/edit/${id}`, body)
}

 //Borra una película del API con el id pasado por parámetro
 public deleteApiMovie(id: string):Observable<ApiMovie>{    
  return this.http.delete<ApiMovie>(`${API_MOVIE_URL}/delete/${id}`)
}


}
