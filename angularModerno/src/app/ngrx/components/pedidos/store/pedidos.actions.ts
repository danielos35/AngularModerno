
import  { Action } from '@ngrx/store';

export const  ADD_PEDIDOS = 'ADD_PEDIDOS';
export const  REMOVE_PEDIDO = 'REMOVE_PEDIDO';
export const  REMOVE_ALL = 'REMOVE_ALL';
export const  UPDATE_PEDIDO = 'UPDATE_PEDIDO';

export class AddPedidosClass implements Action {
  readonly type:string = ADD_PEDIDOS;
  constructor(public pedido:{index:number, pedido:any}){}
}

export class RemovePedidosClass implements Action {
  readonly type:string = REMOVE_PEDIDO;
  constructor(public pedido:{index:number}){}
}

export class RemoveAll implements Action {
  readonly type:string = REMOVE_ALL;
}

export class UpdatePedido implements Action {
  readonly type = UPDATE_PEDIDO;
  constructor(public pedido:any){}
}
