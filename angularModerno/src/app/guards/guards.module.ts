import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { IndexGuardComponent } from './index-guard/index-guard.component';
import { PageUneComponent } from './components/page-une/page-une.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

@NgModule({
  declarations: [
    IndexGuardComponent,
    PageUneComponent,
    PageTwoComponent,
    PageThreeComponent,
    LoginComponent,
    SearchComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, GuardsRoutingModule],
})
export class GuardsModule {}
