/**
 *
 * DIRECTIVAS ¿QUE SON?
 * SON ATRIBUTOS QUE NOS PERMITEN CAMBIAR LA APARIENCIA DEL DOM ELEMENT
 *
 *
 * TYPOS DE DIRECTIVAS
 * - ESTRUCTURALES (*ngIf, ngFor)
 *
 * - DE ATRIBUTOS
 * - ngCLass =
 * --- [ngClass]="["clase#1", "clase#2"]"
 * --- [ngClass]="'clase#1', 'clase#2'"
 * --- [ngClass]="{'clase#1':true, 'clase#2':false}" (la llave es la clase y el valor es el condicional, false o true)
 * --- [ngClass]="{'clase#1':data === 'Daniel', 'clase#2': test === 12}" (podemos usar el valor i de un ngFor)
 *
 * - ngStyle
 * --- [ngStyle]="{'color', 'red', font-size: 2px}"
 * --- [ngStyle]="{'color', 'red', font-size: nombre === 'Daniel' ? 2px : '5px'}" (Podemos usar un ternario)
 *  (PREFERIBLEMENTE NO USARg)
 *
 * - DIRECTIVAS CUSTOM
 *
 * - COMPONENTES
 *
 *
 *
 * */
