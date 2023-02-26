import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiCinema } from './api-cinema.model';
import { AuthService } from '../../auth/auth.service';

//Ruta del API a la parte de cines
const API_CINEMA_URL="https://proyecto-node-olive.vercel.app/cinemas";

@Injectable({
  providedIn: 'root'
})
export class ApiCinemaService {

  constructor(private http:HttpClient, private auth: AuthService) { }

  //Llamada al método Get del API usando la ruta declarada anteriormente como constante. Devuelve un observable con el
  //array de los cines existentes en el API
  public ApiGetCinema(): Observable<ApiCinema[]>{
     return this.http.get<ApiCinema[]>(`${API_CINEMA_URL}`)
    }

  //Llamada al método Get del API usando la ruta declarada anteriormente como constante e introduciendo como 
  //parametro identificador de un cine. Devuelve un observable con el cine existente en el API con ese id
  public ApiGetCinemaById(id:string): Observable<ApiCinema>{
    return this.http.get<ApiCinema>(`${API_CINEMA_URL}/id/${id}`)
   }

  //Llamada al método Post del API usando la ruta declarada anteriormente como constante e introduciendo como 
  //parametro identificador la información del cine.Devuelve un observable con el cine creado
  public ApiPostCinema(body:ApiCinema): Observable<ApiCinema>{        
    return this.http.post<ApiCinema>(`${API_CINEMA_URL}/jwt`, body)
   }

  //Llamada al método Put del API usando la ruta declarada anteriormente como constante e introduciendo como 
  //parametro identificador de un cine y la información del cine. Devuelve un observable con el cine modificado
  public ApiPutCinema(id:string, body:ApiCinema): Observable<ApiCinema>{
    return this.http.put<ApiCinema>(`${API_CINEMA_URL}/edit-jwt/${id}`, body)
   }

  //Llamada al método Delete del API usando la ruta declarada anteriormente como constante e introduciendo como 
  //parametro identificador de un cine. Devuelve un observable con el cine eliminado
  public ApiDeleteCinema(id:string): Observable<ApiCinema>{
    return this.http.delete<ApiCinema>(`${API_CINEMA_URL}/delete-jwt/${id}`)
  }
}
