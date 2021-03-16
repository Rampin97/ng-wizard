import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepThreeComponent } from './step-three.component';

describe('StepThreeComponent', () => {
  let component: StepThreeComponent;
  let fixture: ComponentFixture<StepThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
