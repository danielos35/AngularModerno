import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FatherComponent {
  dataFromSon!: string;
  datosParaHijo!: string;

  constructor(public zone: NgZone) {}

  isRender(): boolean {
    console.log('renderizado el padre');
    return true;
  }

  resiveData(data: string) {
    this.dataFromSon = data;
  }
}
