import { Component } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.css']
})
export class RulerComponent {
  minorTicks = [1, 3, 5, 10];
  majorTicks = [10, 100, 1000, 10000];
  selectedMinorTick!: number;
  selectedMajorTick!: number;
  scaleLength!: number;

  updateMinorTick(e: any) {
    this.selectedMinorTick = e.target.value
  }

  updateMajorTick(e: any) {
    this.selectedMajorTick = e.target.value
  }
}
