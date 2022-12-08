import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangesComponent {
  data: number = 1;
  constructor(private ref: ChangeDetectorRef) {
    // Desactivar change detections
    ref.detach();

    setInterval(() => {
      this.data++;
    }, 1000);

    // ACTIVAR SOLO CADA 10 segundos
    setInterval(() => {
      this.ref.detectChanges();
      this.ref.detach();
    }, 3000);
  }

  getChanges() {
    console.log('Cambió');
  }
}
