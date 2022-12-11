import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradoresComponent } from './decoradores.component';

describe('DecoradoresComponent', () => {
  let component: DecoradoresComponent;
  let fixture: ComponentFixture<DecoradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
