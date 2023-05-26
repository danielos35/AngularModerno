import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';



/*

  PRUEBAS UNITARIOS
    - Es la prueba de un comportamiento especifico
    - Las pruebas unitarios deben de hacerse de manera independiente al resto de los componentes

*/



describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  /*

  -- BEFOREACH
  --- Ejecuta el codigo en su interior antes de cada una de las pruebas unitarias

  */
  beforeEach(async () => {


    /*
    --TESTBED
    --- Es la base por la cual se hace testing en angular, (Cama de testeo)

    */
    await TestBed.configureTestingModule({
      declarations: [ NotesComponent ]
    })
    .compileComponents();

    //Crea un componente en base a la clase del compoente
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;

    //Comprobar que el componente funciona
    fixture.detectChanges();
  });


  /*

  -- ITS
    --- Los Its, son las pruebas unitarios de los componentes.

  */

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/*











*/

