import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectBookingRequestComponent } from './accept-reject-booking-request.component';

describe('AcceptRejectBookingRequestComponent', () => {
  let component: AcceptRejectBookingRequestComponent;
  let fixture: ComponentFixture<AcceptRejectBookingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRejectBookingRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptRejectBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
