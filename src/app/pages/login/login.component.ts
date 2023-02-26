import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from 'src/app/core/services/auth/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm?:FormGroup;
  public error:string="";
  //Se utiliza Reactive Form para crear el formulario de Login
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  //Método para validar al usuario. Si el uuario rellena correctamente su usuario y clave, se envía llama al método de login
  //del servicio Auth y si se realiza de manera correcta, se resetea el formulario y se navega a la página de inicio.
  //Si hay un error en el login, se identifica si es por un error 500 y en ese caso se muestra un mensaje de usuario y clave
  //incorrecto. En caso contrario, se muestra el mensaje de error del API
  public login() {
    if (!this.loginForm?.valid) { return; }
    const user: IUser = this.loginForm.value;
    this.auth.login(user).subscribe({
      next: (res) => {
        this.loginForm?.reset();
        alert("Te has identificado correctamente");
        this.router.navigate(['inicio']);
      },
      error: (err) => {
        if (err.status=500)
        {
          this.error="Parece que no has introducido correctamente tu usuario y clave"
        }
        else{
             this.error = err.error}
        this.loginForm?.reset();
      },
    });
   
  }

}
