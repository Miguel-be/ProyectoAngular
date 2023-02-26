import { ApiCinemaService } from './api/api-cinema.service';
import { Injectable } from '@angular/core';
import { Cinema } from './cinema.model';
import { catchError, map, Observable } from 'rxjs';
import { ApiCinema } from './api/api-cinema.model';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private apiCinemaService:ApiCinemaService) { }

  //Llamada al método que realiza un Get de nuestra API. Devuelve un observable con los datos de los cines existente en 
  //nuestra API como actualmente los datos que usamos en la aplicación son los mismos que nos viene del API, no transformamos los datos.
  public getCinema():Observable<Cinema[]>{
    return this.apiCinemaService.ApiGetCinema().pipe(
      map((apiCinema:ApiCinema[])=> {return apiCinema}))    
  }

 //Llamada al método que realiza un Get By Id de nuestra API. Devuelve un observable con los datos del cine existente en el 
 //API con la clave Id. Como actualmente los datos que usamos en la aplicación son los mismos que nos viene 
 //del API, no transformamos los datos.
  public getCinemaById(id:string):Observable<Cinema>{
    return this.apiCinemaService.ApiGetCinemaById(id).pipe(
      map((apiCinema:ApiCinema)=> {return apiCinema}))    
  }

 //Llamada al método que realiza un Post de nuestra API. Devuelve el cine que se añade al API. Se pasa por parámetro la información
 //del cine añadido
 public createCinema(body:Cinema):Observable<Cinema>{   
  return this.apiCinemaService.ApiPostCinema(body).pipe(
    map((apiCinema:ApiCinema)=> {return apiCinema}))
}

 //Llamada al método que realiza un Put de nuestra API. Se pasa por parámetro los datos del cine. Devuelve el cine modificado.
 public editCinema(id:string, body:Cinema):Observable<Cinema>{
  return this.apiCinemaService.ApiPutCinema(id, body).pipe(
    map((apiCinema:ApiCinema)=> {return apiCinema}))    
  }

//Llamada al método que realiza un Put de nuestra API. Se pasa por parámetro los datos del cine. Devuelve el cine modificado.
public deleteCinema(id:string):Observable<Cinema>{
  return this.apiCinemaService.ApiDeleteCinema(id).pipe(
    map((apiCinema:ApiCinema)=> {return apiCinema}))    
  }
 
}
