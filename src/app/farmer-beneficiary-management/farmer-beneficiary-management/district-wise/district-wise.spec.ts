import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseComponent } from './district-wise';

describe('DistrictWiseComponent', () => {
  let component: DistrictWiseComponent;
  let fixture: ComponentFixture<DistrictWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictWiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
