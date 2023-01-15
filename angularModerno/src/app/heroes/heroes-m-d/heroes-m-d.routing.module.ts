import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcComponent, MarvelComponent } from './pages';
import { MainComponent } from './main/main.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dc',
        component: DcComponent,
      },
      {
        path: 'marvel',
        component: MarvelComponent,
      },
      {
        path: 'heroe/:IdHeroe',
        component: HeroeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Heroes_m_d_RoutingModule {}
