import { TestBed } from '@angular/core/testing';

import { ConnectionlService } from './connectionl.service';

describe('ConnectionlService', () => {
  let service: ConnectionlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
