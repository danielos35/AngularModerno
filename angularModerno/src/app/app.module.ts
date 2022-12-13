import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContainerSonComponent } from './ng-container/ng-container-son/ng-container-son.component';
import { NgContNgTemplateComponent } from './ng-cont-ng-template/ng-cont-ng-template.component';
import { DecoradoresComponent } from './decoradores/decoradores.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './pipes/pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HostListenerComponent,
    NgContainerComponent,
    NgContainerSonComponent,
    NgContNgTemplateComponent,
    DecoradoresComponent,
    PipesComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
