import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { GrandFatherComponent } from './components/grand-father/grand-father.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SonTwoComponent } from './components/son-two/son-two.component';
import { FatherTwoComponent } from './components/father-two/father-two.component';
import { TeoriaComponent } from './teoria/teoria.component';

@NgModule({
  declarations: [
    FatherComponent,
    SonComponent,
    GrandFatherComponent,
    HomeComponent,
    SonTwoComponent,
    FatherTwoComponent,
    TeoriaComponent,
  ],
  imports: [CommonModule, FormsModule, ChangeDetectionRoutingModule],
})
export class ChangeDetectionModule {}
