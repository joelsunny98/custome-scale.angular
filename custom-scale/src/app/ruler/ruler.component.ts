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

  minor!: number[];
  major!: number[]

  ngOnInit(): void {
    this.minor = Array.from({ length: this.minorTick }, (_, index) => index);
    this.major = Array.from({ length: Math.floor(this.scaleLength / this.majorTick) }, (_, index) => index * this.majorTick);
    console.log(this.minor, this.major)
  }
}
