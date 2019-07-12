import { TestBed, inject } from '@angular/core/testing';

import { PricePredictorService } from './price-predictor.service';

describe('PricePredictorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricePredictorService]
    });
  });

  it('should be created', inject([PricePredictorService], (service: PricePredictorService) => {
    expect(service).toBeTruthy();
  }));
});
