import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGuardComponent } from './index-guard.component';

describe('IndexGuardComponent', () => {
  let component: IndexGuardComponent;
  let fixture: ComponentFixture<IndexGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
