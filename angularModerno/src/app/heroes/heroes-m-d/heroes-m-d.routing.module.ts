import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcComponent, MarvelComponent } from './pages';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [MarvelComponent, DcComponent, MainComponent, NavbarComponent],
})
export class Heroes_m_d_RoutingModule {}
