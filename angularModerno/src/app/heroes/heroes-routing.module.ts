import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainComponent } from './heroes-m-d/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'heores_intranet',
    loadChildren: () =>
      import('./heroes-m-d/heroes-m-d.module copy').then(
        (mod) => mod.HeroesMDModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
