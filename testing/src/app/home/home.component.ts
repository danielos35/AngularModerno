import { Component } from '@angular/core';
import { TestingService } from '../services/testing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TestingService]
})
export class HomeComponent {

  constructor(private testing: TestingService){
  }
}
