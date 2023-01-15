import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.scss'],
})
export class ListaHeroesComponent {
  @Input() dataHero: Array<any> = [];
}
