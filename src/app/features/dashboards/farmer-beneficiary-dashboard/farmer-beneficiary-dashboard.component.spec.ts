import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBeneficiaryDashboardComponent } from './farmer-beneficiary-dashboard.component';

describe('FarmerBeneficiaryDashboardComponent', () => {
  let component: FarmerBeneficiaryDashboardComponent;
  let fixture: ComponentFixture<FarmerBeneficiaryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerBeneficiaryDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerBeneficiaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
