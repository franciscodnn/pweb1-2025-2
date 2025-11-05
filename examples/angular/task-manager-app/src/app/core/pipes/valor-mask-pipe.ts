import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorMask'
})
export class ValorMaskPipe implements PipeTransform {

  /*
  transform(value: string): unknown {
    return value.replace(/(\w+)(\d+)/, '$1 $2');
  }
  */

  transform(value: string): string {
    if(value.toLowerCase() == 'low') return 'Baixo';
    if(value.toLowerCase() == 'medium') return 'Médio';
    
    return 'Alto';
  }

}
