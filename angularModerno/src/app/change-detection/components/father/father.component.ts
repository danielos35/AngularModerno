import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FatherComponent {
  dataFromSon!: string;
  isRender(): boolean {
    console.log('renderizado el padre');
    return true;
  }

  resiveData(data: string) {
    this.dataFromSon = data;
  }
}
