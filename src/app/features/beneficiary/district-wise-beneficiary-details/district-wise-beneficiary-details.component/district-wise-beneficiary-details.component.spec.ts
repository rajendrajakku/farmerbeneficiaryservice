import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseBeneficiaryDetailsComponent } from './district-wise-beneficiary-details.component';

describe('DistrictWiseBeneficiaryDetailsComponent', () => {
  let component: DistrictWiseBeneficiaryDetailsComponent;
  let fixture: ComponentFixture<DistrictWiseBeneficiaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictWiseBeneficiaryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseBeneficiaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
