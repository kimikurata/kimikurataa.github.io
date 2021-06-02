import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThumbsComponent } from './project-thumbs.component';

describe('ProjectThumbsComponent', () => {
  let component: ProjectThumbsComponent;
  let fixture: ComponentFixture<ProjectThumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectThumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
