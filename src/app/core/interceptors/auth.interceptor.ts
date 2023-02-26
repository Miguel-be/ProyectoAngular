import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
/*Este interceptor nos permite incluir el token en todas las peticiones al API. No aplica para el método Get ya que estos end points
no necesitan autenticación. */
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method!=="GET"){   
    const token= this.authService.getToken();
    request= request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })
    }
    return next.handle(request);
  }
}
