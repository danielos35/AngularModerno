import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroes_m_d_RoutingModule } from './heroes-m-d.routing.module';
import { DcComponent, MarvelComponent } from './pages';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
@NgModule({
  declarations: [
    MarvelComponent,
    DcComponent,
    MainComponent,
    NavbarComponent,
    HeroCardComponent,
    ListaHeroesComponent,
  ],
  imports: [CommonModule, Heroes_m_d_RoutingModule],
})
export class HeroesMDModule {}
