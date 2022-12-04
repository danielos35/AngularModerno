import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SonComponent {
  @Input() data!: any;
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  dataInput!: string;

  isRender(): boolean {
    console.log('renderizado el hijo');
    return true;
  }

  emitDataToFather(): void {
    this.emitData.emit(this.dataInput);
  }
}
