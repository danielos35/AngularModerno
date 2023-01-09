import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildStandAloneComponent } from './child-stand-alone/child-stand-alone.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stand-alone-c',

  // Nueva propiedad de los stand_alone_components
  standalone: true,

  /*    
    - Con el CommonModule puedo usar cualquier directiva (ngif, ngfor, etc)
    - Dentro de import puedo traer todos los componentes que necesite usar dentro del componente stand alone
    - Podemos configurar un componente para que tenga lazyLoading dentro de las rutas
  */

  imports: [CommonModule, ChildStandAloneComponent],
  templateUrl: './stand-alone-c.component.html',
  styleUrls: ['./stand-alone-c.component.scss'],
})
export class StandAloneCComponent implements OnInit, OnDestroy {
  title_memory!: string;
  constructor(private readonly titulo: Title) {}

  ngOnInit(): void {
    this.title_memory = this.titulo.getTitle();
    console.log(this.title_memory);
    this.titulo.setTitle('Stand Alone');
  }

  ngOnDestroy(): void {
    this.titulo.setTitle(this.title_memory);
  }
}

/*
Notas:

--- No tiene que estar declarado en el modulo de la aplicación.
--- Las rutas se configuran de la manera tradicionales (ver routing.module)
--- Utiliza lazyLoading de manera nativa
--- 

*/
