import { Component, OnInit } from '@angular/core';
import { getHeroeByPublisher } from '../../helpers/getHeroesFilter';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss'],
})
export class MarvelComponent implements OnInit {
  dataHeroes: Array<any> = [];
  ngOnInit() {
    this.dataHeroes = getHeroeByPublisher('Marvel Comics');
  }
}
