import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUneComponent } from './page-une.component';

describe('PageUneComponent', () => {
  let component: PageUneComponent;
  let fixture: ComponentFixture<PageUneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
