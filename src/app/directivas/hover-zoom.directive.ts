import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHoverZoom]',
  standalone: true,
    host: {
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HoverZoomDirective {

  @Input() appHoverZoom: number = 1.5;

private el = inject(ElementRef);

  constructor() { }

   @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = `scale(${this.appHoverZoom})`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }

}