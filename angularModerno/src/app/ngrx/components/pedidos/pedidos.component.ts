import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  pedido:FormControl = new FormControl();
  pedidos:Array<string> = [];

  addPedido(){
    this.pedidos.push(this.pedido.value);
    this.pedido.setValue(null);
  }

}
