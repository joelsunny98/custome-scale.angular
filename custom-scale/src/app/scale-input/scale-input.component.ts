import { Component } from '@angular/core';

@Component({
  selector: 'app-scale-input',
  templateUrl: './scale-input.component.html',
  styleUrls: ['./scale-input.component.css']
})
export class ScaleInputComponent {
  minorTicks = [];
  majorTicks = [];
  selectedMinorTick!: number;
  selectedMajorTick!: number;
  scaleLength!: number;
  isScaleVisible = false;

  updateMinorTick(e: any) {
    this.selectedMinorTick = parseInt(e.target.value);
  }

  updateMajorTick(e: any) {
    this.selectedMajorTick = parseInt(e.target.value);
  }

  makeVisible(){
    this.isScaleVisible = !this.isScaleVisible;
  }
}
