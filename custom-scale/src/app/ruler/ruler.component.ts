import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.css']
})
export class RulerComponent {
 
  @Input() scaleLength!: number;

  @Input() majorTick!: number;

  @Input() minorTick!: number;



  // getScaleRange(): number[] {
  //   // const points = Array.from({ length: this.scaleLength + 1 }, (_, index) => index);

  //   const points = Array.from({ length: Math.floor(this.scaleLength / this.selectedMajorTick) + 1 }, (_, index) => index * this.selectedMajorTick);

  //   // const points: number[] = [];
  //   // for (let i = 0; i <= this.scaleLength; i += this.selectedMajorTick) {
  //   //   if (this.selectedMajorTick / i === 0) {
  //   //     points.push(i);
  //   //   }
  //   // }

  //   console.warn(points)
  //   return points
  // }
}
