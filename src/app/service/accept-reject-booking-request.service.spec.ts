import { TestBed } from '@angular/core/testing';

import { AcceptRejectBookingRequestService } from './accept-reject-booking-request.service';

describe('AcceptRejectBookingRequestService', () => {
  let service: AcceptRejectBookingRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptRejectBookingRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
