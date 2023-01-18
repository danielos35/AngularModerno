import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardian } from './canActivate/canActivate.guard';
import { CanActivateChildCustom } from './canActivateChild/canActivateChileCustom';
import { UserCardComponent } from './components/user-card/user-card.component';
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
        canActivateChild:[CanActivateChildCustom],
        children: [
          {
            path: 'user/:autenticate',
            component: UserCardComponent,
          },
        ],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate:[CanActivateGuardian]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardsRoutingModule {}
