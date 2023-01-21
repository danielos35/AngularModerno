import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable( {providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor( private readonly auth:AuthService ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth.user.pipe(map((user:any)=>{
            return !!user
        }))
    }
}