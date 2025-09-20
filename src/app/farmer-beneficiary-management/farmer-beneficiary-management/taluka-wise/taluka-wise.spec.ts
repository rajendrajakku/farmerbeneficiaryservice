import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukaWiseComponent } from './taluka-wise';

describe('TalukaWiseComponent', () => {
  let component: TalukaWiseComponent;
  let fixture: ComponentFixture<TalukaWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalukaWiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalukaWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
