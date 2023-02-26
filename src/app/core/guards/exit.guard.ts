import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateCinemaComponent } from 'src/app/pages/create-cinema/create-cinema.component';
import { CreateMovieComponent } from 'src/app/pages/create-movie/create-movie.component';

@Injectable({
  providedIn: 'root'
})
/*Esta guardia le muestra al usuario una ventana de confirmación antes de salir de la página de Creación de cines. En el caso
de que haya enviado el formulario, no haya escrito nada todavía o esté en edicción, no le muestra la ventana*/
export class ExitGuard implements CanDeactivate<CreateCinemaComponent> {
  canDeactivate(
    component: CreateCinemaComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {   
        if (component.isFinished || component.canEdit || !component.cinemaForm?.dirty)  
          return true;
        return window.confirm("Si abandonas la página perderás los datos introducidos")   
  }  
}

