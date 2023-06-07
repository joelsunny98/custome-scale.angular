import { Component } from '@angular/core';
@Component({
  selector: 'app-scale-input',
  templateUrl: './scale-input.component.html',
  styleUrls: ['./scale-input.component.css']
})
export class ScaleInputComponent {
  minorTicks = [];
  majorTicks = [];
  selectedMinorTick = 0;
  selectedMajorTick = 0;
  scaleLength = 0;
  isScaleVisible = false;

  /**
   * Method to make child component visible
   */
  makeVisible() {
    this.isScaleVisible = !this.isScaleVisible;
  }
}
