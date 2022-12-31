import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * DEBEMOS UTILIZAR LA INTERFACE PRELOADSTRATEGY
 * */
export class EstrategiaCargaModulosService implements PreloadingStrategy {
  preloadedModules: Array<string | undefined> = [];
  constructor() {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      this.preloadedModules.push(route.path);
      return load();
    } else {
      return of(null);
    }
  }
}
