import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean = false;

  constructor(private route:Router, private auth:AuthService){    
  }
  
  //Nos suscribimos al observable que nos determina si el usuario está o no conectado.
  public ngOnInit(): void {  
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }
  
  //Cerramos la sesión del usuario usando el método logout del servicio auth
  public cerrarSesion():void{
    this.auth.logout();
  }

}
