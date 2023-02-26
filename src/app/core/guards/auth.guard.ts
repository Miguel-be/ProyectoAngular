import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
/*En esta guardia identificamos si el usuario está conectado. En el caso de que no lo esté, le enviamos a login y no le dejamos
pasar a la página destino. Sólo se pone en páginas protegidas.  */
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.auth.isLogged())
      return true;
    else return this.router.createUrlTree(['login']);        
  }
  
}
