import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class CanActivateChildCustom implements CanActivateChild{
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("HIJOOO", childRoute);
        console.log("state:", state);
        if(childRoute.params['autenticate'] === '0'){
            return false;
        }
        return true;
    }
}