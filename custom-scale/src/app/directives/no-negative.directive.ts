import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="number"][noNegative]',
  standalone: true
})
export class NoNegativeDirective {

  constructor(private el: ElementRef<HTMLInputElement>) { }

  @HostListener('input')
  onInput() {
    this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D*/g, '');
  }
}
