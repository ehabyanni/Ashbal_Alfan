import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPrintingsComponent } from './paper-printings.component';

describe('PaperPrintingsComponent', () => {
  let component: PaperPrintingsComponent;
  let fixture: ComponentFixture<PaperPrintingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperPrintingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperPrintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
