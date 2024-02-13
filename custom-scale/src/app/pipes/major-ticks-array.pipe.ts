import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majorTicksArray',
  standalone: true
})
export class MajorTicksArrayPipe implements PipeTransform {

  transform(majorTick: number, scaleLength: number): number[] {
    return Array.from({ length: Math.floor(scaleLength / majorTick) + 1 }, (_, index) => index * majorTick);
  }

}
