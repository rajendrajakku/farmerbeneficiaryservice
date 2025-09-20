import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukaWiseBeneficiaryDetails } from './taluka-wise-beneficiary-details';

describe('TalukaWiseBeneficiaryDetails', () => {
  let component: TalukaWiseBeneficiaryDetails;
  let fixture: ComponentFixture<TalukaWiseBeneficiaryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalukaWiseBeneficiaryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalukaWiseBeneficiaryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
