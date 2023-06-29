import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {

  datos:string = '';

  verValorDatos(){
    console.log('estos son los datos', this.datos);
  }

}
