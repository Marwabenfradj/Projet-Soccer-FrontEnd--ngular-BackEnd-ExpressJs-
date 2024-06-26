import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow');
  }
  @HostListener('mouseenter') onMouseLeave() {
    this.changeColor(null!);
  }

  changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
