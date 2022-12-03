import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerSonComponent } from './ng-container-son.component';

describe('NgContainerSonComponent', () => {
  let component: NgContainerSonComponent;
  let fixture: ComponentFixture<NgContainerSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContainerSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainerSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
