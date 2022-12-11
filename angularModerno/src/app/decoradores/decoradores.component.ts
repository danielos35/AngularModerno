import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoradores',
  templateUrl: './decoradores.component.html',
  styleUrls: ['./decoradores.component.scss'],
})
export class DecoradoresComponent implements OnInit {
  ngOnInit(): void {
    // this.decorador_de_clase();
    // this.decoradorDeMetodo();
    this.decoradorDePropiedad();
  }

  decorador_de_clase() {
    const decorador_uno = new Clase_numero_uno();
    decorador_uno.agregartItems('Arroz');
    console.log(decorador_uno);
  }

  decoradorDeMetodo() {
    const decorador_metodo = new UI();
    decorador_metodo.removeElement('data');
  }

  decoradorDePropiedad() {
    const decorador_de_propiedad = new DePropiedad();
    decorador_de_propiedad.palabra = 'hola mundo';
    console.log(decorador_de_propiedad.palabra);
  }

  /**
   *
   * DEFINICIÓN
   * - Es una función que resive ciertos parametros especiales
   *
   * IMPORTANTE
   * - Agregar al tsconfig la propiedad "experimentalDecorators":true para que todo funcione correctamente
   *
   *
   * TIPO DE DECORADORES
   *
   * 1. DE CLASES
   * 2. DE METODOS
   * 3. DE PROPIEDADES
   * 4. DE ACCESO Y PARAMETROS
   * */
}

/*
DECORADOR DE CLASE.....................................................
*/

function Decorador_uno(target: Function) {
  console.log('este es un decorador');

  // Agregar un metodo desde el decorador
  target.prototype.metodo_uno = function () {
    console.log('Este es un metodo añadido desde el decorador');
  };

  // Acceder a una propiedad desde un decorador
  target.prototype.item = [];
  target.prototype.agregartItems = function (data: string) {
    target.prototype.item.push(data);
  };
}

export interface Clase_numero_uno {
  item: string;
  agregartItems(data: string): void;
}

@Decorador_uno
export class Clase_numero_uno {}

// DECORADOR DE METODO.........................

const confirm = function (message: string) {
  return function (
    target: Object,
    key: String | symbol,
    descriptor: PropertyDescriptor
  ) {
    const valor = descriptor.value;

    // Capturar parametros
    descriptor.value = function (...args: any[]) {
      console.log(args);
    };

    // alert('Se va eliminar este dato');
  };
};

export class UI {
  @confirm('se eliminará un documento')
  removeElement(element: any) {}
}

// DECORADOR DE PROPIEDAD O ATRIBUTO.....

const EnMayusculas = function () {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const aMayuscula = function (palabra: string) {
      return palabra.toUpperCase();
    };

    const setter = function (data: string) {
      value = aMayuscula(data);
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
};

export class DePropiedad {
  @EnMayusculas()
  palabra: string = 'esta en minuscula';
}
