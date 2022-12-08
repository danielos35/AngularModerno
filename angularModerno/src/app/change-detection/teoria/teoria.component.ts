import { Component } from '@angular/core';

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.component.html',
  styleUrls: ['./teoria.component.scss'],
})
export class TeoriaComponent {
  changeDetection() {
    /**
     * CHANGE DETECTION
     * Es un mecanismo que toma el estado interno de la aplicación y lo hace visible a la interfaz de usuario.
     * el ESTADO puede ser cualquier estructura de datos (Objetos, arrays, datos primitivos)
     * */
  }

  funcionamientoAppAngular() {
    /**
     *
     * ARBOL DE COMPONENTES
     * Angular funciona como un arbol de componentes y cada uno de esos componentes tiene su propio detector de cambios.
     *
     * */
  }

  queCausaChangeDetector() {
    /**
     *
     * El change detector es activado mediante
     * - los eventos del DOM, clic, blur, hover, etc
     * - XHR, obtenemos datos desde otro servidor (API)
     * - Por medio de los timers (setTimeOut, setInterval)
     * */
  }

  comoFuncionaLaDetencionDeCambiosEnAngular() {
    /**
     *
     * ¿Como funciona el change detector?
     * - Anula los mecanismos predeterminados del navegador (addEventListener)
     * - Se utiliza NgZone, la cual es una implementación de Angular que utiliza Zone.js
     *
     * ¿QUE ES ZONEJS?
     * - Es una libreria que permite crear ZONAS las cuales permiten a Angular rastrear el inicio y la finalización de actividades asincronas y realizar las tares donde sea necesario (Crear pequeñas ZONAS DE CONTEXTO)
     *
     * */
  }

  cicloDeDetencionDeCambios() {
    /**
     * CICLO DE DETENCIÓN DE CAMBIOS
     * - Cambio de estado de la data en el model (Developer)
     * - Cambio del estado de la data en la vista (Change detector)
     *
     * POR DEFECTO LA DETENCION DE CAMBIOS VERIFICA TODO EL ARBOL DE COMPONENTES
     * "La detención de cambios tiene un costo " (Pues renderiza todos los componentes)
     * */
  }

  estrategiasDeDetencionDeCambios() {
    /**
     * DEFAULT
     * - Estrategia de detencion de cambios que angular utiliza por defecto
     * - Es conocida como verificación sucia (dado que recorre todo el arbol de componentes)
     * - Influye mucho en el performance de aplicativos GRANDES
     * - Se activa cuando se desencadena cualquier evento
     *
     * ON PUSH
     * - Verifica solo las zonas que le interesa
     * - Brinda la posibilidad de omitir verificaciones innecesarias
     * -- ¿Cuando hace la validación?
     * --- Cambia la referencia de entrada a cambiado (@input)
     * --- El componente o uno de sus hijos desencadena un controlador de eventos
     * --- La detención de cambios se activa de manera manual
     * --- Un observable vinculado al template a traves de Async Pipe emite un nuevo valor
     *
     * -- ¿Cuando NO seactiva esta validacion?
     * --- Cuando se moodifica un observable
     * --- SetTimeOut, setInterval
     *
     * */
  }
}
