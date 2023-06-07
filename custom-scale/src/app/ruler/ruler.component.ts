import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.css']
})
export class RulerComponent implements OnInit {

  @Input() scaleLength!: number;

  @Input() majorTick!: number;

  @Input() minorTick!: number;

  minors!: number[];
  majors!: number[];

  ngOnInit(): void {
    this.minors = Array.from({ length: this.minorTick }, (_, index) => index);
    this.majors = Array.from({ length: Math.floor(this.scaleLength / this.majorTick) + 1 }, (_, index) => index * this.majorTick);
  }
}
