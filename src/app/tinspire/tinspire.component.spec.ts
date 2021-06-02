import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinspireComponent } from './tinspire.component';

describe('TinspireComponent', () => {
  let component: TinspireComponent;
  let fixture: ComponentFixture<TinspireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinspireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinspireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
