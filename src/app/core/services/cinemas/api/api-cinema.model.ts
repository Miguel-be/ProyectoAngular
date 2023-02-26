//Se establece la interfaz de datos de los cines que vendrán del API. Como los cines incluyen
//películas necesitamos importar también la interfaz de datos de cines.

import { ApiMovie } from "../../movies/api/api-movie.model"

export interface ApiCinema {
    _id:string,
    movies: ApiMovie [],
    name: string,
    location: string
}