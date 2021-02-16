import { TestBed } from '@angular/core/testing';

import { BuyingAreaService } from './buying-area.service';

describe('BuyingAreaService', () => {
  let service: BuyingAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyingAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
