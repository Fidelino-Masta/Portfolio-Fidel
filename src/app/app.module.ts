import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsWebComponent } from './pages/projects-web/projects-web.component';
import { ProjectsDesignWebComponent } from './pages/projects-design-web/projects-design-web.component';
import { ProjectsAppMobileComponent } from './pages/projects-app-mobile/projects-app-mobile.component';
import { ModalSeeMoreComponent } from './pages/modal-see-more/modal-see-more.component';
import { ContentModalComponent } from './pages/content-modal/content-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsWebComponent,
    ProjectsDesignWebComponent,
    ProjectsAppMobileComponent,
    ModalSeeMoreComponent,
    ContentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
