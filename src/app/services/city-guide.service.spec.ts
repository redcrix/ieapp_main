import { TestBed } from '@angular/core/testing';

import { CityGuideService } from './city-guide.service';

describe('CityGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityGuideService = TestBed.get(CityGuideService);
    expect(service).toBeTruthy();
  });
});
