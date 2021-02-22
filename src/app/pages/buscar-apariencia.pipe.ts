import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarApariencia'
})
export class BuscarAparienciaPipe implements PipeTransform {

  transform(value1: any, arg2:any): any {
    const buscarporapariencia = [];
    for (const recorre of value1){
      if (recorre.biography.alignment.toLowerCase().indexOf(arg2.toLowerCase()) > -1){
        buscarporapariencia.push(recorre);
      }
    }
    return buscarporapariencia;
  }

}
