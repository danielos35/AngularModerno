import { Action } from "@ngrx/store";
import * as PedidosActions from './pedidos.actions';

const initalState:any = {
  pedidos: ['Zapatos']
}

export function pedidosReducer( state:any = initalState , action:PedidosActions.AddPedidosClass ):any | Action{

  console.log(state);

  switch(action.type){
    case PedidosActions.ADD_PEDIDOS:
      return {
        ...structuredClone(state),
        pedidos:[ ...state.pedidos, action.pedido]
      }
    case PedidosActions.REMOVE_PEDIDO:
      return {
        ...structuredClone(state),
        pedidos: [ ... state.pedidos ]
      }
    default:
      return state
  }
}
