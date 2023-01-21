import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private readonly auth:AuthService){
  }
  title = 'angularModerno';
  
  
  ngOnInit(): void {
    this.auth.autoLogin();
  }
  
  isRender(): boolean {
    console.log('renderizado el app component');
    return true;
  }

}
