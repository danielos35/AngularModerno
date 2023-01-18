import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { IndexGuardComponent } from './index-guard/index-guard.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    IndexGuardComponent,
    LoginComponent,
    SearchComponent,
    NavbarComponent,
    UserCardComponent,
  ],
  imports: [CommonModule, GuardsRoutingModule],
})
export class GuardsModule {}
