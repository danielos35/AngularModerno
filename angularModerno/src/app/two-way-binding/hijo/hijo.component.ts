import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {

  @Input() datos:string = '';
  @Output() datosChange = new EventEmitter<string>();

  actualizarDatos(evento:any){
    const data = evento?.target?.value || '';
    this.datos = data;
    this.datosChange.emit(data);
  }

}
