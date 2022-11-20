import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildStandAloneComponent } from './child-stand-alone/child-stand-alone.component';

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
export class StandAloneCComponent {}

/*
Notas:

--- No tiene que estar declarado en el modulo de la aplicación.
--- Las rutas se configuran de la manera tradicionales (ver routing.module)
--- Utiliza lazyLoading de manera nativa
--- 

*/
