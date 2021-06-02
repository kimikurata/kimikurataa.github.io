import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipythonComponent } from './tipython.component';

describe('TipythonComponent', () => {
  let component: TipythonComponent;
  let fixture: ComponentFixture<TipythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipythonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
