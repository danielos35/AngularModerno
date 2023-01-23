
import  { Action } from '@ngrx/store';

export const  ADD_PEDIDOS = 'ADD_PEDIDOS';
export const  REMOVE_PEDIDO = 'REMOVE_PEDIDO';
export const  REMOVE_ALL = 'REMOVE_ALL';

export class AddPedidosClass implements Action {
  readonly type:string = ADD_PEDIDOS;
  constructor(public pedido:any, public index:number = 0){}
}

export class RemovePedidosClass implements Action {
  readonly type:string = REMOVE_PEDIDO;
  constructor(public pedido:any, public index:number){}
}

export class RemoveAll implements Action {
  readonly type:string = REMOVE_ALL;
  constructor(public pedido:any = null, public index:number = 0){}
}
