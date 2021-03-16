import { Component, ComponentFactoryResolver, forwardRef, OnInit, ViewChild } from '@angular/core';
import { NgWizardStepDirective } from '../../utils/interfaces';
import { NgWizardStepContentDirective } from '../ng-wizard-step-content.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-wizard-step',
  templateUrl: './ng-wizard-step.component.html',
  styleUrls: ['./ng-wizard-step.component.css'],
  providers: [
    { provide: NgWizardStepDirective, useExisting: forwardRef(() => NgWizardStepComponent) }
  ]
})
export class NgWizardStepComponent extends NgWizardStepDirective implements OnInit {
  @ViewChild(NgWizardStepContentDirective, { static: true }) stepContent: NgWizardStepContentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    super();
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    if (!this.component) {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    this.stepContent.viewContainerRef.clear();
    this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
  }
}
