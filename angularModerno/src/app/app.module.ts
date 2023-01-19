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
import { FormsComponent } from './forms/forms.component';
import { RoutesComponent } from './routes/routes.component';
import { ResolvesComponent } from './resolves/resolves.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HeroesModule } from './heroes/heroes.module';
import { AuthComponent } from './auth/auth/auth.component';

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
    FormsComponent,
    RoutesComponent,
    ResolvesComponent,
    HttpComponent,
    NavbarComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
