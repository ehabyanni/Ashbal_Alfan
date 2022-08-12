import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductCarosuelComponent } from './category-product-carosuel.component';

describe('CategoryProductCarosuelComponent', () => {
  let component: CategoryProductCarosuelComponent;
  let fixture: ComponentFixture<CategoryProductCarosuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductCarosuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProductCarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
