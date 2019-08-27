import { TestBed } from '@angular/core/testing';

import { OfferDiscountService } from './offer-discount.service';

describe('OfferDiscountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferDiscountService = TestBed.get(OfferDiscountService);
    expect(service).toBeTruthy();
  });
});
