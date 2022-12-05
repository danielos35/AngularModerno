import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherTwoComponent } from './father-two.component';

describe('FatherTwoComponent', () => {
  let component: FatherTwoComponent;
  let fixture: ComponentFixture<FatherTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
