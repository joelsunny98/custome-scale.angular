import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minorTicksArray',
  standalone: true,
})
export class MinorTicksArrayPipe implements PipeTransform {

  transform(minorTick: number): number[] {
    return Array.from({ length: minorTick }, (_, index) => index);
  }

}
