import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../servicios/http.service';

// PARA USAR HTTP EN ANGULAR IMPORTAMOS EL HTTP CLIENT EN EL MODULO

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent {
  constructor(private readonly htpp: HttpService) {}

  getData() {
    this.htpp.getData().subscribe((res) => {
      console.log(res);
    });
  }

  /*
  HTTP RECEPTOR
  - Intercepta las peticiones HTTP
  - Sirve para añadir headers o parametros repetitivo
  */

  isLoading$ = new Subject<boolean>();
}
