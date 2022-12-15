import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandAloneCComponent } from './stand-alone-c/stand-alone-c.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContNgTemplateComponent } from './ng-cont-ng-template/ng-cont-ng-template.component';
import { DecoradoresComponent } from './decoradores/decoradores.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stand_alone',

    // Evaluar como debe ser la coincidencia
    pathMatch: 'full',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stand_alone',
  },
  {
    path: 'stand_alone',
    component: StandAloneCComponent,
  },
  {
    path: 'host_listener',
    component: HostListenerComponent,
  },

  // Este es ng-content el lugar de ng-container
  {
    path: 'ng_container',
    component: NgContainerComponent,
  },
  {
    path: 'container_template',
    component: NgContNgTemplateComponent,
  },
  {
    path: 'decorator',
    component: DecoradoresComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },

  // Cargar modulo
  {
    path: 'change_detection',
    loadChildren: () =>
      import('./change-detection/change-detection.module').then(
        (mod) => mod.ChangeDetectionModule
      ),
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
