import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngWizardStepContent]'
})
export class NgWizardStepContentDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
  ) {
  }
}
