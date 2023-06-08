import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scale-input',
  templateUrl: './scale-input.component.html',
  styleUrls: ['./scale-input.component.css']
})

export class ScaleInputComponent implements OnInit {
  selectedMinorTick!: number;
  selectedMajorTick!: number;
  scaleLength!: number;
  scaleForm!: FormGroup;
  isScaleVisible = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildScaleForm();
  }

  /**
   * Method to build the scale form.
   */
  buildScaleForm() {
    this.scaleForm = this.formBuilder.group({
      scaleLength: ['', Validators.required],
      selectedMajorTick: ['', Validators.required],
      selectedMinorTick: ['', Validators.required]
    });
  }

  /**
 * Method to make Ruler component visible
 */
  makeScaleVisible() {
    this.isScaleVisible = !this.isScaleVisible;
  }
}
