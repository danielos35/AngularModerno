import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getHeroByID } from '../../helpers/getHeroById';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly rutas: Router
  ) {}
  dataHeroe: any;

  ngOnInit(): void {
    this.route.params.subscribe((res: Params) => {
      this.dataHeroe = getHeroByID(res['IdHeroe']);
      if (!this.dataHeroe)
        this.rutas.navigate(['/heroes/heores_intranet/main/marvel']);
    });
  }
}
