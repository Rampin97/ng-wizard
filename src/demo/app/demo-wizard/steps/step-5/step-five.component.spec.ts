import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepFiveComponent } from './step-five.component';

describe('StepFiveComponent', () => {
  let component: StepFiveComponent;
  let fixture: ComponentFixture<StepFiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
