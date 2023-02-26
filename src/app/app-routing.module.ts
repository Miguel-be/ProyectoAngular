import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

//Listado de las rutas de la aplicación. En el caso de las rutas para crear /editar cines y películas también hay una guardia
const routes: Routes = [
  {
    //Con path vacío se redirige a "inicio". Se establece la opción full.
    path: '',    
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'nuevo-cine',
    loadChildren: () => import('./pages/create-cinema/create-cinema.module').then(m => m.CreateCinemaModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'listado-cines',
    loadChildren: () => import('./pages/list-cinema/list-cinema.module').then(m => m.ListCinemaModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'pelicula-detalle/:id',
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailModule)
  },
  {
    path: 'nueva-pelicula',
    loadChildren: () => import('./pages/create-movie/create-movie.module').then(m => m.CreateMovieModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
    //Cualquier otra ruta
  {
    path:"**",
    loadChildren:()=>import("./pages/not-found/not-found.module").then(m=>m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
