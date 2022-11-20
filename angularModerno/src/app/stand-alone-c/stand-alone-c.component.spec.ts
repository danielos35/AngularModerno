import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAloneCComponent } from './stand-alone-c.component';

describe('StandAloneCComponent', () => {
  let component: StandAloneCComponent;
  let fixture: ComponentFixture<StandAloneCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandAloneCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandAloneCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
