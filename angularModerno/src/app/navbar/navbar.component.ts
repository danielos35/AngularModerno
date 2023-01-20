import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
    this.autenticate = this.auth.user.subscribe(
      (res:any)=>{
        this.isLogin = !!res;
        console.log('LOGIN', this.isLogin);
        
      }
    );
  }

  ngOnDestroy(): void {
    this.autenticate.unsubscribe();
  }

}
