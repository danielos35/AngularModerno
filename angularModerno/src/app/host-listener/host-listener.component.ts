import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.scss'],
})
export class HostListenerComponent {
  image: Array<any> = [
    'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
  ];

  constructor(private render2: Renderer2) {}

  /**
   * HOST LISTENER
   *
   * Nos ayuda a escuchar los eventos que ocurren dentro del DOM en tiempo real
   * */

  @ViewChild('player') player!: ElementRef;

  @HostListener('document:keydown', ['$event'])
  handleKey($event: KeyboardEvent): void {
    this.movePlayer($event.key);
  }

  movePlayer(nameKey: string): void {
    const playerEL = this.player.nativeElement;

    if (nameKey === 'ArrowRight') {
      const { left = '0px' } = playerEL.style;
      const parseValue = Number(left.replace('px', ''));
      this.render2.setStyle(playerEL, 'left', `${parseValue + 50}px`);
    }

    if (nameKey === 'ArrowLeft') {
      const { left = '0px' } = playerEL.style;
      const parseValue = Number(left.replace('px', ''));
      this.render2.setStyle(playerEL, 'left', `${parseValue - 50}px`);
    }

    if (nameKey === 'ArrowDown') {
      const { bottom = '0px' } = playerEL.style;
      const parseValue = Number(bottom.replace('px', ''));
      this.render2.setStyle(playerEL, 'bottom', `${parseValue - 50}px`);
    }

    if (nameKey === 'ArrowUp') {
      const { bottom = '0px' } = playerEL.style;
      const parseValue = Number(bottom.replace('px', ''));
      this.render2.setStyle(playerEL, 'bottom', `${parseValue + 50}px`);
    }
  }
}
