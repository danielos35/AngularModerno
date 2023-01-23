import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PedidosActios from './store/pedidos.actions'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedido:FormControl = new FormControl();
  pedidos!:Observable<{ pedidos:Array<any> }>;

  constructor( private store:Store<{ pedidos_store:{ pedidos:Array<any> }}> ){}

  ngOnInit(): void {
    this.pedidos = this.store.select('pedidos_store')
  }

  addPedido(){
    const pedido = new PedidosActios.AddPedidosClass(this.pedido.value);
    this.store.dispatch(pedido);
  }

  removePedido(index:number){
    const pedido = new PedidosActios.RemovePedidosClass(this.pedido.value, index);
    this.store.dispatch(pedido);
  }



}
