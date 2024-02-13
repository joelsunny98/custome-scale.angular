import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleInputComponent } from '../scale-input/scale-input.component';
import { MinorTicksArrayPipe } from 'src/app/pipes/minor-ticks-array.pipe';
import { MajorTicksArrayPipe } from 'src/app/pipes/major-ticks-array.pipe';

@Component({
  selector: 'app-ruler',
  standalone: true,
  imports: [CommonModule,
    MinorTicksArrayPipe,
    MajorTicksArrayPipe
  ],
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.css'],
})
export class RulerComponent {

  /**
   * Input selector for max length of the sacle
   */
  @Input() scaleLength!: number;

  /**
   * Input slector for the major tick mark
   */
  @Input() majorTick!: number;

  /**
   * Input selector for the total minor ticks
   */
  @Input() minorTick!: number;
}
