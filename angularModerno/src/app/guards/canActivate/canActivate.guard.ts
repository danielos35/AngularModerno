import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export class CanActivateGuardian implements CanActivate {

/**
 * CANACTIVATE
 * - Puede ejecutarse de manera sincrona 
 * - Puede ejecutarse de manera asincrona (para obtener por ejemplo datos del cliente)
 * */ 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return false;
  }
}
