import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of, throwError, Subject, tap } from 'rxjs';
import { User } from "./user.model";
@Injectable({providedIn:'root'})
export class AuthService {

    user = new Subject<User>();

    // MANEJANDO LOS ERRORES DIRECTAMENTE EN EL SERVICIO
    constructor(private http:HttpClient){}
    key:string = 'AIzaSyCYX3e8xHsK477d4k3c-CaJp0G0qA1iXtU';

    signup(email:string, password:string, returnSecureToken:boolean){
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`,{
            email, password,returnSecureToken
        }).pipe(
            catchError( this.manejoDeErrores ), 
            tap( (res:any)=> {
                const data  = this.handleAuthentication(res);
                this.user.next(data);
                console.log('HOLAAA', data);
            })
        )
    }

    login(email:string, password:string,returnSecureToken:boolean = true){
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`,{
            email, password,returnSecureToken
        }).pipe(
            catchError( this.manejoDeErrores ), 
            tap( (res:any)=> {
                const data  = this.handleAuthentication(res);
                this.user.next(data);
                console.log('HOLAAA', data);
            })
        )
    }

    private manejoDeErrores(errores:HttpErrorResponse){
        return of('Error');
    }

    private handleAuthentication(dataUser:any){
        const expirationDate = new Date( new Date().getTime() + dataUser.expiresIn * 1000);
        return new User(dataUser.email, dataUser.localId, dataUser.idToken, expirationDate) || '';
    }
}