import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsStark]',
  standalone: true
})
export class IsStarkDirective implements OnInit {

  @Input() appIsStark: string = '';
  
  // private templateRef = inject(TemplateRef);
  // private viewContainerRef = inject(ViewContainerRef);

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
   }

  ngOnInit(): void {
    if (this.appIsStark.toLowerCase().includes('stark')) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
