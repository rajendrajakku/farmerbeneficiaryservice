import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdetailComponent } from './paymentdetail';

describe('PaymentdetailComponent', () => {
  let component: PaymentdetailComponent;
  let fixture: ComponentFixture<PaymentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.PaymentdetailComponent(PaymentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
