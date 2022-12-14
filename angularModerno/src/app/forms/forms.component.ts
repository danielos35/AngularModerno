import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  /**
   * FORMULARIOS TEMPLATE DRIVE
   * - Para formularios sencillos
   * - No escalables
   * */

  onSumbit(form: any) {
    console.log(form);
  }
}
