import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageUneComponent } from './components/page-une/page-une.component';
import { IndexGuardComponent } from './index-guard/index-guard.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: IndexGuardComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent,
        children: [
          {
            path: 'uno',
            component: PageUneComponent,
          },
          {
            path: 'dos',
            component: PageTwoComponent,
          },
          {
            path: 'tres',
            component: PageThreeComponent,
          },
        ],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardsRoutingModule {}
