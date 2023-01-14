import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MainHeroesComponent } from './main-heroes/main-heroes.component';
import { LoginComponent } from './auth/pages/login/login.component';

@NgModule({
  declarations: [MainHeroesComponent, LoginComponent],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
