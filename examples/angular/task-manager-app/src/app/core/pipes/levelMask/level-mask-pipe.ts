import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelMask'
})
export class LevelMaskPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLowerCase();

    if(value == 'low') return 'baixo';
    if(value == 'medium') return 'médio';
    
    return 'alto';
  }

}
