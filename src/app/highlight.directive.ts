import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  };
  @HostListener('click', ['$event']) onClick(event){
    console.log(event.target);
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };
  @Input('testdefaultcolor') defaultColor = 'white';
  @Input('testhighlightcolor') highlightColor = 'green';
  private backgroundColor: string;
  // constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  constructor(){
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
