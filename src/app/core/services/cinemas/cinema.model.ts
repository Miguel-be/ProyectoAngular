//Se establece la interfaz de datos de los cines que utilizaremos en la aplicación. Actualmente, esta interfaz
//coincide con la interfaz de datos que nos bajamos del API pero lo hemos separado por buenas prácticas.
//Hoy son iguales pero en un futuro podrían ser distintas y en ese caso, nuestro proyecto estaría preparado.

import { Movie } from "./../movies/movie.model";

export interface Cinema {
    _id:string,
    movies: Movie [],
    name: string,
    location: string
}