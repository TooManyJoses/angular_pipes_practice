import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesToKMConvert'
})
export class MilesToKMConvertPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!value) {
      return '';
    }
    return value * 1.609344; 
  }
}
