import { TestBed } from '@angular/core/testing';

import { DataFilterServiceService } from './data-filter-service.service';

describe('DataFilterServiceService', () => {
  let service: DataFilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
