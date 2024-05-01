import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAppMobileComponent } from './projects-app-mobile.component';

describe('ProjectsAppMobileComponent', () => {
  let component: ProjectsAppMobileComponent;
  let fixture: ComponentFixture<ProjectsAppMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsAppMobileComponent]
    });
    fixture = TestBed.createComponent(ProjectsAppMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
