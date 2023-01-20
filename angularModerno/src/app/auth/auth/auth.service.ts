import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of, throwError, Subject, tap, BehaviorSubject } from 'rxjs';
import { User } from "./user.model";
import { Router } from '@angular/router';
@Injectable({providedIn:'root'})
export class AuthService {

    user = new Subject<User | null>();
    
    // El behavior Subjecto nos permite acceder al ultimo valor emitido a pesar de haberse subscripto despues de esta emisión 
    token = new BehaviorSubject<User | null>(null);

    // MANEJANDO LOS ERRORES DIRECTAMENTE EN EL SERVICIO
    constructor(private http:HttpClient, private readonly router:Router){}
    key:string = 'AIzaSyCYX3e8xHsK477d4k3c-CaJp0G0qA1iXtU';


    autoLogin(){
        const userData = localStorage.getItem('userData');
        if(!userData)return
        
    }

    signup(email:string, password:string, returnSecureToken:boolean){
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`,{
            email, password,returnSecureToken
        }).pipe(
            catchError( this.manejoDeErrores ), 
            tap( (res:any)=> {
                const data  = this.handleAuthentication(res);
                this.user.next(data);
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
                // Guardar en el local storage
                localStorage.setItem('userData',JSON.stringify(data));
            })
        )
    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['/auth'])
    }

    private manejoDeErrores(errores:HttpErrorResponse){
        return of('Error');
    }

    private handleAuthentication(dataUser:any){
        const expirationDate = new Date( new Date().getTime() + dataUser.expiresIn * 1000);
        return new User(dataUser.email, dataUser.localId, dataUser.idToken, expirationDate) || '';
    }
}