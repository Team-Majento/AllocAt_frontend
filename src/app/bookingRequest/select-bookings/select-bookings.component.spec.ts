import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBookingsComponent } from './select-bookings.component';

describe('SelectBookingsComponent', () => {
  let component: SelectBookingsComponent;
  let fixture: ComponentFixture<SelectBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
