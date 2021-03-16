import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoWizardComponent } from './demo-wizard.component';

describe('DemoWizardComponent', () => {
  let component: DemoWizardComponent;
  let fixture: ComponentFixture<DemoWizardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoWizardComponent ]
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
