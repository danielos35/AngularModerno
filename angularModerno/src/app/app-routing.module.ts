import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StandAloneCComponent } from './stand-alone-c/stand-alone-c.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContNgTemplateComponent } from './ng-cont-ng-template/ng-cont-ng-template.component';
import { DecoradoresComponent } from './decoradores/decoradores.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { RoutesComponent } from './routes/routes.component';
import { ResolvesComponent } from './resolves/resolves.component';
import { DataResolverService } from './resolves/resolvers/resolvers.service';
import { HttpComponent } from './http/http.component';

// PRECARGA DE MODULOS PERSONALIZADA
import { EstrategiaCargaModulosService } from './servicios/estrategia-carga-modulos.service';
 
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/stand_alone',

  //   // Evaluar como debe ser la coincidencia
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: '/',

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

  /*
  RUTAS HIJAS
  Para el uso de rutas hijas se debe de usar el router outlet dentro del componente padre
  */
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {
        path: 'test',
        component: PipesComponent,
      },
    ],
  },

  // RESOLVES
  {
    path: 'resolves',
    component: ResolvesComponent,
    resolve: { departaments: DataResolverService },
  },
  {
    path: 'routes/:id',
    component: RoutesComponent,
  },

  // Cargar modulo
  {
    path: 'change_detection',
    loadChildren: () =>
      import('./change-detection/change-detection.module').then(
        (mod) => mod.ChangeDetectionModule
      ),
  },

  // Cargar solo los archivos de ejecuci??n necesarios para el componente
  {
    path: 'stand_alone_lazy',
    loadComponent: () =>
      import('./stand-alone-c/stand-alone-c.component').then(
        (m) => m.StandAloneCComponent
      ),
  },
  {
    path: 'esperimentos',
    loadComponent: () =>
      import('./esperimentos/esperimentos.component').then(
        (m) => m.EsperimentosComponent
      ),
  },

  // LAZY LOADING

  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
    data: { preload: true },
  },
  {
    path: 'http',
    component: HttpComponent,
  },
];

/**
 * CARGAR MODULOS DESDE EL INCIO
 * Para cargar modulos desde el inicio colocamos la siguiente configuraci??n
 * - enableTracing: true,
 * - preloadingStrategy: PreloadAllModules, (Importante exportar)
 * - Para elegir cuales extrategias de carga de modulos vamos a usar podemos utilizar un servicio
 * */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: EstrategiaCargaModulosService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
