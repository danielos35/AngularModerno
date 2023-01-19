import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class AuthService {
    constructor(private http:HttpClient){
        
    }
    key:string = 'AIzaSyCYX3e8xHsK477d4k3c-CaJp0G0qA1iXtU'
    signup(email:string, password:string, returnSecureToken:boolean){
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`,{
            email, password,returnSecureToken
        })
    }
}