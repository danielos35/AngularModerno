import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    ReactiveFormsModule
  ]
})
export class NgrxModule { }
