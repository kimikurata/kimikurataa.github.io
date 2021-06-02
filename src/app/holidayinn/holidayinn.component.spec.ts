import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayinnComponent } from './holidayinn.component';

describe('HolidayinnComponent', () => {
  let component: HolidayinnComponent;
  let fixture: ComponentFixture<HolidayinnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayinnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayinnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
