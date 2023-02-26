import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiWiki } from './api-wiki.model';

//Ruta del API wikipedia
const API_MOVIE_URL="https://es.wikipedia.org/api/rest_v1/page/summary/";

@Injectable({
  providedIn: 'root'
})
export class ApiWikiService {

  constructor(private http:HttpClient) { }
  
  //Se hace la llamada Get del api. Se adapta el término de búsqueda de la wikipedia separando espacios por guiones bajos.
  public getApiWiki(search:string): Observable<apiWiki>{
    const temp=this.capital(search);
    const tempTitle = temp.replace(' ', '_') + '?redirect=true';    
    return this.http.get<apiWiki>(`${API_MOVIE_URL}${tempTitle}`)
  }

  //Se adapta el término de búsqueda al API poniendo el término de búsqueda en capital case (en mayúscula la primera 
  //letra de cada palabra)
  public capital (search:string):string{
    const words = search.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
    return words.join(" ");
    }
}
