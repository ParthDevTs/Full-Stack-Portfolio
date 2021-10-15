import { TestBed } from '@angular/core/testing';

import { HighlightServiceService } from './highlight-service.service';

describe('HighlightServiceService', () => {
  let service: HighlightServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
