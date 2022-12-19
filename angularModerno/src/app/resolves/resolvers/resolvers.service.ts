import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

const departaments = ['Departament#1', 'Departament#2', 'Departament#3'];

@Injectable({ providedIn: 'root' })
export class DataResolverService implements Resolve<any> {
  resolve() {
    return of(departaments);
  }
}
