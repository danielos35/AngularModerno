import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolves',
  templateUrl: './resolves.component.html',
  styleUrls: ['./resolves.component.scss'],
})
export class ResolvesComponent implements OnInit {
  data_desde_resolve!: any;
  /**
   * MIDDELWARE QUE VALIDA SI LOS DATOS NECESARIOS PARA UNA VISTA YA SE ENCUENTRAN DISPONIBLES
   * - Se dispara antes de las rutas
   * - Si los datos no está disponible esos datos no se empiezan a renderizar
   *
   * RESOLVER VS GUARD: https://stackoverflow.com/questions/46838455/trying-to-understand-difference-between-canactivate-and-resolver
   * */

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    // PARA RECIBIR LOS DATOS USAMOS LA PROPIEDAD
    this.data_desde_resolve = this.route.snapshot.data;
    console.log(this.data_desde_resolve);
  }
}
