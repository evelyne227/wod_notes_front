import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightConverter'
})
export class WeightConverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
