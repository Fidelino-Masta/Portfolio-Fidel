import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsWebComponent } from './pages/projects-web/projects-web.component';
import { ProjectsDesignWebComponent } from './pages/projects-design-web/projects-design-web.component';
import { ProjectsAppMobileComponent } from './pages/projects-app-mobile/projects-app-mobile.component';

const routes: Routes = [
  {
    path: 'project-app-web',
    component: ProjectsWebComponent
  },
  {
    path: '',
    redirectTo: 'project-app-web',
    pathMatch: 'full'
  },
  {
    path: 'design-web',
    component: ProjectsDesignWebComponent
  },
  {
    path: 'project-app-mobile',
    component: ProjectsAppMobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
