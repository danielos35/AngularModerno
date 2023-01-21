import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { AuthService } from '../auth/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{

  isLogin!:boolean;
  autenticate!:Subscription;
  constructor( private readonly auth:AuthService){}

  ngOnInit(): void {

    console.log('ESTA ES OTRA AUTENTIFICACION');
    
    this.autenticate = this.auth.user.subscribe(
      (res:any)=>{
        console.log('SE RESIVIÓ', this.isLogin, res);
        this.isLogin = !!res;
      }
    );
    
    this.auth.autoLogin();

    // Taken nos permite obtener solamente el utimo valor y despues desuscribirnos de manera inmediata
    this.auth.token.pipe(take(1)).subscribe( (res) =>{
      console.log('token',res);
    }
    )
  }

  logOut(){
    this.auth.logOut();
  }

  ngOnDestroy(): void {
    this.autenticate.unsubscribe();
  }

}
