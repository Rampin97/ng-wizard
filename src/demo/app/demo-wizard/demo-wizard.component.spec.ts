import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoWizardComponent } from './demo-wizard.component';
import {NgWizardComponent, NgWizardStepComponent} from '../../../ng-wizard/public-api';
import {StepSixComponent} from './steps/step-6/step-six.component';
import {FormsModule} from '@angular/forms';

describe('DemoWizardComponent', () => {
  let component: DemoWizardComponent;
  let fixture: ComponentFixture<DemoWizardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        DemoWizardComponent,
        NgWizardComponent,
        NgWizardStepComponent,
        StepSixComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
