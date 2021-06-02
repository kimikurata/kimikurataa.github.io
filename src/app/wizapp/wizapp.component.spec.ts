import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizappComponent } from './wizapp.component';

describe('WizappComponent', () => {
  let component: WizappComponent;
  let fixture: ComponentFixture<WizappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
