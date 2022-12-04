import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandFatherComponent } from './grand-father.component';

describe('GrandFatherComponent', () => {
  let component: GrandFatherComponent;
  let fixture: ComponentFixture<GrandFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandFatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
