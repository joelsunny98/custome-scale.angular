import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { RulerComponent } from '../ruler/ruler.component';
import { NoNegativeDirective } from 'src/app/directives/no-negative.directive';

@Component({
  selector: 'app-scale-input',
  standalone: true,
  imports: [CommonModule,
    RulerComponent,
    FormsModule,
    ReactiveFormsModule,
    NoNegativeDirective
  ],
  templateUrl: './scale-input.component.html',
  styleUrls: ['./scale-input.component.css']
})
export class ScaleInputComponent {


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
      scaleLength: ['', [Validators.required, this.customValidator]],
      selectedMajorTick: ['', [Validators.required, this.customValidator]],
      selectedMinorTick: ['', Validators.required]
    },
    );
  }

  customValidator(control: FormControl)
  {
    const form = control.parent
    const scale = form?.get('scaleLength')?.value;
    const major = form?.get('selectedMajorTick')?.value;

    return scale && major && scale<=major?{'valid': true}: null
  }

}
