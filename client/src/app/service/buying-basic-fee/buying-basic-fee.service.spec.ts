import { TestBed } from '@angular/core/testing';

import { BuyingBasicFeeService } from '../buying-basic-fee/buying-basic-fee.service';

describe('BuyingBasicFeeService', () => {
  let service: BuyingBasicFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyingBasicFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
