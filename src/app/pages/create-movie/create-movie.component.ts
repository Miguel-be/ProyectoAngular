import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import genre  from './../../core/services/movies/genre.data'
import { MovieService } from 'src/app/core/services/movies/movie.service';
import { Movie } from 'src/app/core/services/movies/movie.model';
import { map, switchMap, of, Observable } from 'rxjs';
import { isSelectedImage } from './validators/cover.validator';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent {
  public movieForm?:FormGroup;  
  public genreOptions=genre;
  public BYDEFAULTGENRE="-- Selecciona un genero--"; 
  public movie?:Movie; 
  public movieId: string="";
  public canEdit:boolean =false;
  public cover:Blob | string="";
  public isFinished:boolean=false;

  constructor(private fb: FormBuilder, 
             private movieService:MovieService,
             private router:Router,
             private currentRoute:ActivatedRoute)
    {    
      //queryParams es un observable que recoge los parametros de la URL. El valor del observable lo metemos en 
      //en un map para recoger el id del queryParams. Dentro de un switchMap vemos si hay id --> esto significaría
      //que el usuario quiere editar la película con ese identificador por lo que devolvemos la pelicula que se
      //quiere editar y llamamos al procedimiento para crear el formulario metiendo por parámetro la propia 
      // pelicula. También actualizamos el flag de Editar a True
      //Si dentro del switchMap vemos que no hubiese ningún id, se devuelve un observable con undefined y se llamaría
      //formulario para crear el formulario con este valor. Actualizamos el flag Editar a False.
            
      this.currentRoute.queryParams.pipe(
          map((queryParams)=> queryParams['id']),
          switchMap((id:string)=>{
              if (!id) { return of(undefined)}
              else { this.movieId=id;
                     return this.movieService.getMoviesById(id);}
                    })).subscribe((m?:Movie)=>{ this.canEdit=!!m;
                                                this.CreateForm(m)})  

  }

  //Se define el formulario para introducir los datos de la película. Si se está editando se pone como valores iniciales
  //los ya existentes. En caso contario, se pone vacío o null en el caso de la imagen de la película.
  //Como excepción a lo anterior, se gestiona el valor inicial del género de la película en el que el valor puede ser el ya seleccionado
  //(en el caso de edicción) o valor por defecto en el caso de nueva creación. 
  public CreateForm(m?:Movie){
    this.movieForm=this.fb.group(
      {        
        title: new FormControl("" || m?.title, [Validators.required]),
        director: new FormControl("" || m?.director,[Validators.required]),       
        year: new FormControl("" || m?.year, [Validators.required]),
        cover: new FormControl(null, [isSelectedImage(this.canEdit)])
      }
    ) 
    if (this.canEdit){
      this.movieForm?.addControl('genre', new FormControl(m?.genre, [Validators.required]));
    }
    else{
       this.movieForm?.addControl('genre', new FormControl(this.BYDEFAULTGENRE, [Validators.required]));
    }
  }

  //Se utiliza FormData para subir la imagen de la portada. Esto aplica en la nueva creación y edición de película 
  //cuando se introduce una nueva imagen. 
  //En el caso de que no se suba una imagen (edición sin querer cambiar la portada) utilizamos los campos del formulario
  //pero quitando el null de la imagen. Esto se hace así porque en nuestra API tenemos dos end points PUT distintos dependiendo
  //de si se sube imagen o no.
  public SaveForm ():void{    

    if (!this.movieForm?.valid) { return;}

    let movieRequest: Observable<Movie>; 
    const form = new FormData();
    form.append("title", this.movieForm?.get("title")?.value);
    form.append("director", this.movieForm?.get("director")?.value);
    form.append("genre", this.movieForm?.get("genre")?.value);
    form.append("year", this.movieForm?.get("year")?.value); 

    if (this.canEdit && this.movieId && this.movieForm.get("cover")?.value==null)
    {
      this.movieForm.removeControl("cover");
      movieRequest=this.movieService.editMovieNoCover(this.movieId, this.movieForm?.value)
    }
    else if (this.canEdit && this.movieId)
          {
            form.append("cover", this.cover, "form-data");
            movieRequest=this.movieService.editMovie(this.movieId, form)
          } 
          else{
                form.append("cover", this.cover, "form-data");
                movieRequest=this.movieService.postMovies(form)
              }              
    movieRequest.subscribe(() => 
    {      
      this.isFinished=true;
      this.movieForm?.reset();
      this.cover="";
      alert("Se han introducido correctamente los datos");
      this.router.navigate(['inicio']);
    });   
  }  

  //Función que sube la imagen que selecciona el usuario al atributo de la clase cover.
  public uploadImage(event:any) {
    const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];      
      reader.readAsArrayBuffer(file);   
      this.cover=file;   
  }
}

}

