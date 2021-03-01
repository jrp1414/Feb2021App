import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input("better-highlight") defaultColor: string;
  @Input("highlight") highlightColor: string;
  @HostBinding("style.backgroundColor") backgroundColor;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("click") onClicked() {
    alert("Clicked");
  }

  @HostListener("mouseenter") onMouseEnter() {
    // this.el.nativeElement.style.backgroundColor = this.highlightColor;
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.backgroundColor = this.defaultColor;
  }



}
