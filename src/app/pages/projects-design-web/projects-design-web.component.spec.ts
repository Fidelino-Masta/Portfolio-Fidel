import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDesignWebComponent } from './projects-design-web.component';

describe('ProjectsDesignWebComponent', () => {
  let component: ProjectsDesignWebComponent;
  let fixture: ComponentFixture<ProjectsDesignWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDesignWebComponent]
    });
    fixture = TestBed.createComponent(ProjectsDesignWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
