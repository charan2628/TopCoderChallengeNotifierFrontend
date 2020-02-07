import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnScheduleComponent } from './un-schedule.component';

describe('UnScheduleComponent', () => {
  let component: UnScheduleComponent;
  let fixture: ComponentFixture<UnScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
