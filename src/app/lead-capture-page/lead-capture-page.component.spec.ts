import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCapturePageComponent } from './lead-capture-page.component';

describe('LeadCapturePageComponent', () => {
  let component: LeadCapturePageComponent;
  let fixture: ComponentFixture<LeadCapturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadCapturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadCapturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
