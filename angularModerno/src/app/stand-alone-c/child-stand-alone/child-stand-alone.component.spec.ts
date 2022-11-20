import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStandAloneComponent } from './child-stand-alone.component';

describe('ChildStandAloneComponent', () => {
  let component: ChildStandAloneComponent;
  let fixture: ComponentFixture<ChildStandAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChildStandAloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildStandAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
