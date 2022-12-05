import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularModerno';
  isRender(): boolean {
    console.log('renderizado el app component');
    return true;
  }
}
