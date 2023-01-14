import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private readonly rutas: Router) {}
  onLogOut() {
    this.rutas.navigate(['heroes/login'], { replaceUrl: true });
  }
}
