import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandAloneCComponent } from './stand-alone-c/stand-alone-c.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stand_alone',
  },
  {
    path: 'stand_alone',
    component: StandAloneCComponent,
  },

  // Cargar solo los archivos de ejecución necesarios para el componente
  {
    path: 'stand_alone_lazy',
    loadComponent: () =>
      import('./stand-alone-c/stand-alone-c.component').then(
        (m) => m.StandAloneCComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
