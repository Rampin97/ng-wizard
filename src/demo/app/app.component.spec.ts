import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NgWizardComponent, NgWizardModule, NgWizardStepComponent} from '../../ng-wizard/public-api';
import {DemoWizardComponent} from './demo-wizard/demo-wizard.component';
import {DemoWizardModule} from './demo-wizard/demo-wizard.module';
import {AppModule} from './app.module';
import {StepSixComponent} from './demo-wizard/steps/step-6/step-six.component';
import {AppRoutingModule} from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        DemoWizardModule,
        NgWizardModule,
        AppRoutingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DemoWizardComponent,
        NgWizardComponent,
        NgWizardStepComponent,
        StepSixComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('demo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to demo!');
  });
});
