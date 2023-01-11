import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperimentosComponent } from './esperimentos.component';

describe('EsperimentosComponent', () => {
  let component: EsperimentosComponent;
  let fixture: ComponentFixture<EsperimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsperimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsperimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
