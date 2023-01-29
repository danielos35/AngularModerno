
export interface mazdaInterface {
  llantas:number;
  puertas:string;
  esFamiliar:boolean;
}

// PODEMOS ANIDAR INTERFACES
export interface Autos {
  mazda:mazdaInterface
}

// Y LLAMARLAS CUANDO LAS NECESITEMOS

const miCarro:mazdaInterface = {
  llantas:12,
  puertas:'',
  esFamiliar:false
}


let test:Autos = {
  mazda: miCarro
}
