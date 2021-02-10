import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color = 'red '
    this.el.nativeElement.style.backgroundColor='white'
    this.el.nativeElement.style.backgroundImage="url(../../assets/images/butterfly.jpg)";
   }

}
