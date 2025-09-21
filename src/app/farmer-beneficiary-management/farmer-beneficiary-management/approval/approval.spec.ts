import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalComponent } from './approval';

describe('ApprovalComponent', () => {
  let component: ApprovalComponent;
  let fixture: ComponentFixture<ApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.ApprovalComponent(ApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
