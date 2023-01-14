import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private readonly rutas: Router) {}
  onHeroes() {
    this.rutas.navigate(['heroes/heores_intranet/main'], { replaceUrl: true });
  }
}
