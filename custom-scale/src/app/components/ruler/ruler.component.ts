import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleInputComponent } from '../scale-input/scale-input.component';
import { MinorTicksArrayPipe } from 'src/app/pipes/minor-ticks-array.pipe';

@Component({
  selector: 'app-ruler',
  standalone: true,
  imports: [CommonModule,
    MinorTicksArrayPipe
  ],
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.css'],
})
export class RulerComponent implements OnInit {
  
  @Input() scaleLength!: number;

  @Input() majorTick!: number;

  @Input() minorTick!: number;

  majors!: number[];

  ngOnInit(): void {
    this.majors = Array.from({ length: Math.floor(this.scaleLength / this.majorTick) + 1 }, (_, index) => index * this.majorTick);
  }

}
