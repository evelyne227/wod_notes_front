import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightConverter'
})
export class WeightConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {

    if(value && !(NaN)){

      if(unit === "kg"){
        var weight = value / 2.205;
        return weight.toFixed(2);
      }

      else if(unit === "lb"){
       var weight = value * 2.205;
       return weight.toFixed(2);
     }

 }

  return;
}

}
