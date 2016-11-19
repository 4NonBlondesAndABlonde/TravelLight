/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendCostDataService } from './send-cost-data.service';

describe('Service: SendCostData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendCostDataService]
    });
  });

  it('should ...', inject([SendCostDataService], (service: SendCostDataService) => {
    expect(service).toBeTruthy();
  }));
});
