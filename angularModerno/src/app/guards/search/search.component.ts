import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private readonly router: Router) {}
  data:Array<any> = [
    {
      name:'Daniel', 
      autenticate:0, 
    },
    {
      name:'Sandra', 
      autenticate:1, 
    },
    {
      name:'Nestor', 
      autenticate:1, 
    },
  ]  

}
