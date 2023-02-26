import { Injectable } from '@angular/core';
import { ApiWikiService } from './api/api-wiki.service';
import { Wiki } from './wiki.model';
import { Observable, map } from 'rxjs';
import { apiWiki } from './api/api-wiki.model';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  //Servicio que llama a nuestro procedimiento que realiza la llamda al Get.
  constructor(private apiWikiService:ApiWikiService) { }

  public getDirector(search:string): Observable<Wiki>{
    return this.apiWikiService.getApiWiki(search).pipe(
      map((director: apiWiki)=> {return ({extract:director.extract})}
    ))
  }
}
