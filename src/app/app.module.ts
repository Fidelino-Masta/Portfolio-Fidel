import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsWebComponent } from './pages/projects-web/projects-web.component';
import { ProjectsDesignWebComponent } from './pages/projects-design-web/projects-design-web.component';
import { ProjectsAppMobileComponent } from './pages/projects-app-mobile/projects-app-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsWebComponent,
    ProjectsDesignWebComponent,
    ProjectsAppMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
