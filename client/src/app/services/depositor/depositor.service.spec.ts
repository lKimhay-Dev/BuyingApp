import { TestBed } from '@angular/core/testing';

import { DepositorService } from './depositor.service';

describe('DepositorService', () => {
  let service: DepositorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
