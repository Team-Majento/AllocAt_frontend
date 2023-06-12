import { TestBed } from '@angular/core/testing';

import { ChangePwdServiceService } from './change-pwd-service.service';

describe('ChangePwdServiceService', () => {
  let service: ChangePwdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangePwdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
