//Se establece la interfaz de datos de las peliculas vendrán del API. También se declara el tipo Genre
//con los géneros de las películas (los mismos que existen en el esquema del API de Node)
export interface ApiMovie {
    _id: string,
    title: string,
    director: string,
    genre: Genre,
    year: number,
    cover: File
}

export type Genre= "acción"| "animación"| "comedia romántica"| "ciencia ficción";



