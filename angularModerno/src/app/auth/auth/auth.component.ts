import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  mail:string = '';
  password!:string;
  isLogin!:boolean;

  dataUser:any;
  initSession(){
    this.isLogin = !this.isLogin;
    this.dataUser = {email:this.mail, password:this.password}
  }

}
