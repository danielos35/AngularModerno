import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvesComponent } from './resolves.component';

describe('ResolvesComponent', () => {
  let component: ResolvesComponent;
  let fixture: ComponentFixture<ResolvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
