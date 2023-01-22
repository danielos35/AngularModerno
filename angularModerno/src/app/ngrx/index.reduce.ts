import { ActionReducerMap } from '@ngrx/store';
import { pedidosReducer } from './components/pedidos/store/pedidos.reducer';

export const reducers_index: ActionReducerMap<any, any> = {
  pedidos_store: pedidosReducer
}
