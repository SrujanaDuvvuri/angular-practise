import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements OnInit{

  @Input('appEmoji') emoji:String=""

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color="purple"
  }
  ngOnInit() {
    this.el.nativeElement.textContent = this.el.nativeElement.textContent + ' ' + this.emoji
  }


}
