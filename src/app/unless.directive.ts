import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {

    } else {

    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
