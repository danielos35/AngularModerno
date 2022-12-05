import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgZone,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  /**
   * Por medio de un Push se van a detectar eventos de usuarios como clic o teclas presionadas y subscripciones
   * Tambien detecta el @input desde un padre
   *
   */
})
export class SonComponent {
  variable!: any;
  constructor(private cdr: ChangeDetectorRef) {
    this.variable = 'Hola mundo';

    // Con esta funcion desactivamos los cambios
    this.cdr.detach();

    // Con esta funcion activamos nuevamente los cambios
    // this.cdr.reattach();
  }

  changeValue(event: any) {
    this.variable = event.key;
    this.cdr.detectChanges();
  }
}
