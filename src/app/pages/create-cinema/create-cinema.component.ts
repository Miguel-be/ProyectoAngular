import { MovieService } from './../../core/services/movies/movie.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Cinema } from 'src/app/core/services/cinemas/cinema.model';
import { CinemaService } from 'src/app/core/services/cinemas/cinema.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap, of, Observable } from 'rxjs';
import { Movie } from 'src/app/core/services/movies/movie.model';

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.scss']
})
export class CreateCinemaComponent {

  public cinemaForm?:FormGroup;  
  public cinema?:Cinema; 
  public cinemaId: string="";
  public canEdit:boolean =false;  
  public allmovies?:Movie[];
  public isFinished:boolean=false;

  constructor(private fb: FormBuilder, 
             private cinemaService:CinemaService,
             private router:Router,
             private currentRoute:ActivatedRoute,
             private moviesService:MovieService)
    {    
      //queryParams es un observable que recoge los parametros de la URL. El valor del observable lo metemos en 
      //en un map para recoger el id del queryParams. Dentro de un switchMap vemos si hay id --> esto significaría
      //que el usuario quiere editar el cine con ese identificador por lo que devolvemos el cine que se
      //quiere editar y llamamos al procedimiento para crear el formulario metiendo por parámetro el propio 
      //cine. También actualizamos el flag de Editar a True
      //Si dentro del switchMap vemos que no hubiese ningún id, se devuelve un observable con undefined y se 
      //llamaría al formulario para crear el formulario con este valor. Actualizamos el flag Editar a False.
      this.moviesService.getMovies().subscribe((value)=>{this.allmovies=value})      

      this.currentRoute.queryParams.pipe(
          map((queryParams)=> queryParams['id']),
          switchMap((id:string)=>{
              if (!id) { return of(undefined)}
              else { this.cinemaId=id;
                     return this.cinemaService.getCinemaById(id);}
                    })).subscribe((c?:Cinema)=>{ this.canEdit=!!c;
                                                 this.CreateForm(c)})       
  }

  //Se define el formulario para introducir los datos del cine. Si se está editando se pone como valores iniciales
  //los ya existentes. En caso contario, se pone vacío excepto en el caso de las películas que echan en el cine dónde por defecto
  //se ponen todas las películas sin seleccionar (en el caso de nueva creación) o las películas ya seleccionadas (en el caso de 
  //edicción)
  public CreateForm(c?:Cinema){
    this.cinemaForm=this.fb.group(
      {        
        name: new FormControl("" || c?.name, [Validators.required]),
        location: new FormControl("" || c?.location,[Validators.required]),        
        movies: new FormControl (c?.movies, [Validators.required]),
      }
    )  
  }

  //Si el formulario es válido no se sigue la ejecución. En caso cpontario, se comprueba si se está editando o creando
  //un cine para ejecutar el método correspondiente de edición (acabará ejecutando un put) o nueva creación (acabará ejecutando un post)
  //A parte de resetear el formulario y redirigir a la página de inicio, la aplicación también actualiza el flag de finalización que
  //serviría de información a la Guardia para saber si debe mostrar una ventana de confirmación al usuario al salir de la página.
  public SaveForm ():void{    
    {
      if (!this.cinemaForm?.valid) { return; }
     
      const productRequest = this.canEdit && this.cinemaId
        ? this.cinemaService.editCinema(this.cinemaId, this.cinemaForm?.value)
        : this.cinemaService.createCinema(this.cinemaForm?.value);
      productRequest.subscribe(() => {     
        this.cinemaForm?.reset();
        this.isFinished=true;
        alert("Se han introducido correctamente los datos");
        this.router.navigate(['inicio']);
      });
    }
  }
}

