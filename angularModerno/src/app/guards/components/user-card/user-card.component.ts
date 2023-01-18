import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  name!:string;
  constructor(private readonly route: ActivatedRoute,){
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe((res:any)=>{
        this.name = res.name
      })
  }

}
