import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RulerComponent } from '../ruler/ruler.component';

@Component({
  selector: 'app-scale-input',
  standalone: true,
  imports: [CommonModule,
    RulerComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './scale-input.component.html',
  styleUrls: ['./scale-input.component.css']
})
export class ScaleInputComponent {

  selectedMinorTick!: number;
  selectedMajorTick!: number;
  scaleLength!: number;
  scaleForm!: FormGroup;
  isScaleVisible = false;
  buttonClicked: boolean = false;

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
