import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {
  nombre!: string;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly routes: Router
  ) {}
  ngOnInit(): void {
    /**
     * Recibir parametros
     *
     * Mediante route.params me puedo subscribir a los parametros
     * */
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.nombre = params['nombre'];
    // });

    // recibir params
    // El id debe de configurarse en el route.module
    this.route.params.subscribe((res: Params) => {
      console.log('ESTE ES EL VALOR DEL PARAM', res['id']);
    });
    console.log(this.nombre);
  }

  navegar() {
    this.routes.navigate(['routes'], { queryParams: { nombre: 'Daniel' } });
  }
}
