import { TestBed } from '@angular/core/testing';

import { CanonicalService } from './canonical.service';

describe('CannonicalService', () => {
  let service: CanonicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanonicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
