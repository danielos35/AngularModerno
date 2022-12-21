import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

const routes: Routes = [
  {
    path: 'lazy',
    component: LazyLoadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadingRoutingModule {}

/**
 * FORROOT
 * - se utiliza para colocar todas las rutas en el modulo principal, se recomienda tener un solo forRoot en la aplicación 
 * 
 * FORCHILD
 * - Se utiliza para colocar todas las rutas de los modulos, y solo será utilizado cuando angular lo necesite
 * */ 
