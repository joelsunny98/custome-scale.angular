import { Component } from '@angular/core';

@Component({
  selector: 'app-scale-input',
  templateUrl: './scale-input.component.html',
  styleUrls: ['./scale-input.component.css']
})
export class ScaleInputComponent {
  minorTicks = [3, 5, 10];
  majorTicks = [10, 100, 1000, 10000];
  selectedMinorTick: number = 3;
  selectedMajorTick: number = 10;
  scaleLength!: number;
  isScaleVisible = false;

  updateMinorTick(e: any) {
    this.selectedMinorTick = e.target.value
  }

  updateMajorTick(e: any) {
    this.selectedMajorTick = e.target.value;
  }
}
