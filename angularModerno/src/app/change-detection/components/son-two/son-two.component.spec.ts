import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonTwoComponent } from './son-two.component';

describe('SonTwoComponent', () => {
  let component: SonTwoComponent;
  let fixture: ComponentFixture<SonTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
