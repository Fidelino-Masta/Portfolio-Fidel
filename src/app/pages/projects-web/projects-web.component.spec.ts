import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWebComponent } from './projects-web.component';

describe('ProjectsWebComponent', () => {
  let component: ProjectsWebComponent;
  let fixture: ComponentFixture<ProjectsWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsWebComponent]
    });
    fixture = TestBed.createComponent(ProjectsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
