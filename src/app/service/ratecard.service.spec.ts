import { TestBed } from '@angular/core/testing';

import { RatecardService } from './ratecard.service';

describe('RatecardService', () => {
  let service: RatecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
