import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, tap, Observable } from 'rxjs';
import { IUser, IUserSignInResponse } from './models/auth.models';

const AUTH_URL="https://proyecto-node-olive.vercel.app/user";
const TOKEN_KEY="user-token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userLogged$: ReplaySubject<boolean>=new ReplaySubject<boolean>(1);

  constructor(private http:HttpClient, private router:Router) {
    this.userLogged$.next(this.isLogged())    
   }
  
  //Función que llama al end point de login. Se guarda el token en el local storage para poderlo usar posteriormente
  //en los end points que necesitan autenticación. 
  public login(user:IUser):Observable<IUserSignInResponse>{
    return this.http.post<IUserSignInResponse>(`${AUTH_URL}/login-jwt`, user).pipe(
            tap((res:IUserSignInResponse)=>{
              const userToStore=JSON.stringify({token:res.token, id:res.user._id, email:res.user.email});
              localStorage.setItem(TOKEN_KEY, userToStore);
              this.userLogged$.next(true);
              this.router.navigate(['inicio']);
            })
    )
  }

  //Función que llama al end point register. 
  public register(user:IUser):Observable<IUser>
  {
    return this.http.post<IUser>(`${AUTH_URL}/register`, user)
  }

  //Función que determina si el usuario ya está identificado para ello verifica si el token está guardado en el local storage.
  public isLogged():boolean{
    const authToken=localStorage.getItem(TOKEN_KEY);
    if (!authToken){return false}
    const isValidToken=JSON.parse(authToken)?.token
    return !!isValidToken;
  }

  //Función que recoge el token del local storage.
  public getToken():string{
    const authToken=localStorage.getItem(TOKEN_KEY);
    return authToken?JSON.parse(authToken)?.token:null;    
  }

 //Función que "simula" un logout para ello borra el token del local storage.
  public logout(){
    const removeToken= localStorage.removeItem(TOKEN_KEY);
    this.userLogged$.next(false);
    if (removeToken==null){
      this.router.navigate(['inicio']);
    }
  }
}
