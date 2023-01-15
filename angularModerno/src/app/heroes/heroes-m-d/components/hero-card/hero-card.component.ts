import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnChanges {
  @Input() heroe!: any;
  url!: string;

  constructor(private readonly rutas: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.url = `assets/heroes/${this.heroe.id || ''}.jpg`;
  }

  goToHero(param: any) {
    this.rutas.navigate(['/heroes/heores_intranet/main/heroe', param]);
  }
}
