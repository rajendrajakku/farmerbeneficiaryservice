import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseComponent } from './state-wise';

describe('StateWiseComponent', () => {
  let component: StateWiseComponent;
  let fixture: ComponentFixture<StateWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateWiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
