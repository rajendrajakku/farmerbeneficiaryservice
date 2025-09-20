import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseBeneficiaryDetailsComponent } from './statewise-beneficiary-details.component';

describe('StatewiseBeneficiaryDetailsComponent', () => {
  let component: StatewiseBeneficiaryDetailsComponent;
  let fixture: ComponentFixture<StatewiseBeneficiaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatewiseBeneficiaryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatewiseBeneficiaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
