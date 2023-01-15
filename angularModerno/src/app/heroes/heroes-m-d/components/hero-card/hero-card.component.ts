import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnChanges {
  @Input() heroe!: any;

  url!: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.url = `../assets/heroes/${this.heroe.id || ''}.jpg`;
  }
}
