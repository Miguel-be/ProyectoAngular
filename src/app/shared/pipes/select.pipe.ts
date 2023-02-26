import { Pipe, PipeTransform } from '@angular/core';
import { Cinema } from 'src/app/core/services/cinemas/cinema.model';

@Pipe({
  name: 'select'
})

//Se crea un pipe para filtrar los cines en función de un texto de búsqueda.
export class SelectPipe implements PipeTransform {

  transform(value: Cinema[] | null, find: string = ''): Cinema[] {
    if (!value) { return []; }
    if (!find) { return value; }
    return value.filter((c) => {
      return c.location.toLowerCase().includes(find.toLowerCase())}
        );
    };
  }

