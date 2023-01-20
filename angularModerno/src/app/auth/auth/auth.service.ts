import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';
@Injectable({providedIn:'root'})
export class AuthService {

    // MANEJANDO LOS ERRORES DIRECTAMENTE EN EL SERVICIO
    constructor(private http:HttpClient){}
    key:string = 'AIzaSyCYX3e8xHsK477d4k3c-CaJp0G0qA1iXtU';

    signup(email:string, password:string, returnSecureToken:boolean){
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`,{
            email, password,returnSecureToken
        }).pipe(
            catchError( this.manejoDeErrores )
        )
    }

    login(email:string, password:string,returnSecureToken:boolean = true){
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`,{
            email, password,returnSecureToken
        }).pipe(
            catchError( this.manejoDeErrores )
        )
    }

    manejoDeErrores(errores:HttpErrorResponse){
        return of('Error');
    }
}