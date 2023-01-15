import { Component } from '@angular/core';
import { getHeroeByPublisher } from '../../helpers/getHeroesFilter';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss'],
})
export class DcComponent {
  dataHeroes: Array<any> = [];
  ngOnInit() {
    this.dataHeroes = getHeroeByPublisher('DC Comics');
  }
}
