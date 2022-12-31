import { TestBed } from '@angular/core/testing';

import { EstrategiaCargaModulosService } from './estrategia-carga-modulos.service';

describe('EstrategiaCargaModulosService', () => {
  let service: EstrategiaCargaModulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstrategiaCargaModulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
