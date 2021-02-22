import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: string): string {
    let encabezado = 'Album'+ value;
    return encabezado;
  }

}
