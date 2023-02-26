//Se establece la interfaz de datos de las películas que utilizaremos en la aplicación. Actualmente, esta interfaz
//coincide con la interfaz de datos que nos bajamos del API pero lo hemos separado por buenas prácticas.
//Hoy son iguales pero en un futuro podrían ser distintas y en ese caso, nuestro proyecto estaría preparado.
import { Genre } from "./api/api-movie.model"

export interface Movie {
    _id: string,
    title: string,
    director: string,
    genre: Genre,
    year: number,
    cover: File
}
