import { Component } from '@angular/core';

/**
 * El renderizado se da cada vez que angular detecta un cambio, en el modo desarrollo hace un doble chequeo por eso el renderizado se dea dos veces
 * */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isRender(): boolean {
    console.log('renderizado el home');
    return true;
  }
}
