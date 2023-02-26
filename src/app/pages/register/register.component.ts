import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/services/auth/models/auth.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  public loginForm?:FormGroup;
  public error:string="";

  //Se construye el formlario de registro. Es casi una copia del formulario login. Se utiliza un formulario reactivo
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  //Este método registra al usuario en el sistema. Si el formulario está bien relleno, se registra al usuario y 
  //si no hay error también se realiza un login del usuario. Se navega a la página inicio.
  //En el caso de que el registro falle, si lo hace con un error 500 mostramos un mensaje al usuario diciendo que 
  //el email utilizado ya está dado de alta en el sistema y que no se puede regitrar dos veces a un usuario con el mismo
  //email. En caso contario, si el error no es 500, se muestra mensaje indicativo de error.
  public register() {
    if (!this.loginForm?.valid) { return; }
    const user: IUser = this.loginForm.value;
    this.auth.register(user).subscribe({
      next: (res) => {
        this.loginForm?.reset();
        this.auth.login(user).subscribe({
          next: (res) => {
            this.loginForm?.reset();
            alert("Se han introducido correctamente los datos");
            this.router.navigate(['inicio']);
          },})        
      },
      error: (err) => {
        if (err.status=500)
        {
          this.error="¿Te habías registrado antes? Parece que ya existe un usuario con ese email"
        }
        else{
             this.error = err.error}
        this.loginForm?.reset();        
      },
    });
   
  }

}

