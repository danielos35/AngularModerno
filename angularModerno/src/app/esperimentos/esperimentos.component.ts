import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../componentes/modal/modal.component';

@Component({
  standalone: true,
  selector: 'app-esperimentos',
  imports: [CommonModule, ModalComponent],
  templateUrl: './esperimentos.component.html',
  styleUrls: ['./esperimentos.component.scss'],
})
export class EsperimentosComponent {
  closeModal: boolean = true;

  abrirModal() {
    // this.closeModal = false;
    console.log('ok');
  }

  cerrarModal() {
    // this.closeModal = true;
    console.log('cancel');
  }
}
