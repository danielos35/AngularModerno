import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }

  getDeatails(){
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve('Data')
      },2000)
    })
  }
}
