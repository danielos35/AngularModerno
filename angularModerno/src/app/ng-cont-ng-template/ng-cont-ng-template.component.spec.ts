import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContNgTemplateComponent } from './ng-cont-ng-template.component';

describe('NgContNgTemplateComponent', () => {
  let component: NgContNgTemplateComponent;
  let fixture: ComponentFixture<NgContNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContNgTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
