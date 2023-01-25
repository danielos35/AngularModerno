import { Action } from "@ngrx/store";
import * as PedidosActions from './pedidos.actions';

const initalState:any = {
  pedidos: ['Zapatos']
}

export
  function pedidosReducer
    (
      state:any = initalState ,
      action: PedidosActions.RemovePedidosClass | PedidosActions.AddPedidosClass | PedidosActions.UpdatePedido
    ): any | Action
    {

    console.log('PEDIDO', action, state);

    switch(action.type){

      case PedidosActions.ADD_PEDIDOS:
        return {
          ...structuredClone(state),
          pedidos:[ ...state.pedidos, action.pedido]
        }

      case PedidosActions.REMOVE_PEDIDO:
        return {
          ...structuredClone(state),
          pedidos: state.pedidos.filter( (_:any, i:number) => (i !==  action.pedido.index ))
        }

      case PedidosActions.REMOVE_ALL:
        return {
          ...structuredClone(state),
          pedidos: []
        }

      case PedidosActions.UPDATE_PEDIDO:
        const pedido = state.pedidos[action.pedido.index];
        console.log('INDEX #1', pedido);
        console.log('INDEX #2', action.pedido.pedido);

        const updatePedido = {
          pedido,
          data:action.pedido.pedido
        }
        console.log('UPDATE:::',updatePedido);

        const updatePedidos = [...state.pedidos];
        updatePedidos[action.pedido.index] = updatePedido.data;
        console.log(updatePedidos);

        return {
          ...structuredClone(state),
          pedidos: updatePedidos
        }

      default:
        return state
  }
}
