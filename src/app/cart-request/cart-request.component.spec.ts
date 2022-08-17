import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRequestComponent } from './cart-request.component';

describe('CartRequestComponent', () => {
  let component: CartRequestComponent;
  let fixture: ComponentFixture<CartRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
