import { TestBed } from '@angular/core/testing';

import { DeliverAreaService } from './deliver-area.service';

describe('DeliverAreaService', () => {
  let service: DeliverAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
