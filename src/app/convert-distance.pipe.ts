import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDistance'
})
export class ConvertDistancePipe implements PipeTransform {

  transform(value: any, unitOfMeasurement: string): unknown {
    if(!value) {
      return '';
    }
    
    switch(unitOfMeasurement){
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1.609344 * 1000;
      case 'cm':
        return value * 1.609344 * 1000  * 1000;
      default:
        throw new Error('Target unit not supported')

    }
  }
}
