import { TestBed } from '@angular/core/testing';

import { HallOfFameApiService } from './hall-of-fame-api.service';

describe('HallOfFameApiService', () => {
  let service: HallOfFameApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HallOfFameApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
