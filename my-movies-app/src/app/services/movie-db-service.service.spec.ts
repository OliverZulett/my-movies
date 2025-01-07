import { TestBed } from '@angular/core/testing';

import { MovieDbServiceService } from './movie-db-service.service';

describe('MovieDbServiceService', () => {
  let service: MovieDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
