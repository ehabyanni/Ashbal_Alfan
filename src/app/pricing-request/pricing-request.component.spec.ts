import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingRequestComponent } from './pricing-request.component';

describe('PricingRequestComponent', () => {
  let component: PricingRequestComponent;
  let fixture: ComponentFixture<PricingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
