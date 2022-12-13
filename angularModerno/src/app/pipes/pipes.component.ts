import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  /**
   * PIPES
   * Son utilizados para transformar una data (input) en algun formato requerido
   *
   * Pipes puros
   * - Solo realiza la tarea en cuanto el valor ingresado cambia
   *
   * Pipes impuros
   * - Realiza la tarea cada vez que se redibuja los componente
   *
   *
   *
   * PARA CONOCER COMO SE CREA UN CUSTOM PIPE VER pipes/custom.pipes
   * PARA QUE NUESTRO PIPE FUNCIONE LO DEBEMOS DE 'DECLARAR' EN EL APPMODULE
   *
   * */

  data!: string;
  arreglo: string[] = ['Sandra', 'Nestor', 'Daniel'];
}
