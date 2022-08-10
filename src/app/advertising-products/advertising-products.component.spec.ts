import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingProductsComponent } from './advertising-products.component';

describe('AdvertisingProductsComponent', () => {
  let component: AdvertisingProductsComponent;
  let fixture: ComponentFixture<AdvertisingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
