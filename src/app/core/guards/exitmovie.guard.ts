import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateMovieComponent } from 'src/app/pages/create-movie/create-movie.component';


@Injectable({
  providedIn: 'root'
})
/*Igual que la guardia de cines pero para películas. No se muestra si el usuario ya ha enviado el formulario, no ha empezado a escribir
nada o está en edicción.*/
export class ExitmovieGuard implements CanDeactivate<CreateMovieComponent> {
  canDeactivate(
    component: CreateMovieComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.isFinished || component.canEdit || !component.movieForm?.dirty)  
      return true;
    return window.confirm("Si abandonas la página perderás los datos introducidos")   
  }
  
}
