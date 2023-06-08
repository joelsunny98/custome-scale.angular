import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="number"][noNegative]',
  standalone: true
})
export class NoNegativeDirective {

  constructor(private el: ElementRef<HTMLInputElement>) { }

  @HostListener('input')
  onInput() {
    const inputValue = this.el.nativeElement.value;
    const allowedValue = inputValue.replace(/\D*/g, '');
    this.el.nativeElement.value = allowedValue;
  }
}
