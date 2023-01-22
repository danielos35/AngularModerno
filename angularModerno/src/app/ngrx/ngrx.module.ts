import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers_index } from './index.reduce';


@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers_index),
    NgrxRoutingModule,
    ReactiveFormsModule
  ]
})
export class NgrxModule { }
