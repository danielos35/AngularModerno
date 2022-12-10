import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangesComponent } from './components/changes/changes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'changes',
    component: ChangesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDetectionRoutingModule {}
