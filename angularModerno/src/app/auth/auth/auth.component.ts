import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  constructor(private readonly auth:AuthService, private readonly router:Router){}

  mail:string = '';
  password!:string;
  isLogin!:boolean;

  ngOnInit(): void {
 
  }

  initSession(){
    this.auth.signup(this.mail, this.password, true).subscribe(
      (res:any)=>{
        if(res.registered) this.isLogin = true;
        this.router.navigate(['/forms'])
      },
      (err)=>{
        console.log('Este es el error', err);
        this.isLogin = false;
      }
    );
  }

}
