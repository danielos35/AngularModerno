
import  { Action } from '@ngrx/store';

export const  ADD_PEDIDOS = 'ADD_PEDIDOS';
export const  REMOVE_PEDIDO = 'REMOVE_PEDIDO';

export class AddPedidosClass implements Action {
  readonly type:string = ADD_PEDIDOS;
  constructor(public pedido:any){}
}

export class RemovePedidosClass implements Action {
  readonly type:string = REMOVE_PEDIDO;
  constructor(public pedido:any){}
}
