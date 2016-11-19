/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CostInfoService } from './cost-info.service';

describe('Service: CostInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CostInfoService]
    });
  });

  it('should ...', inject([CostInfoService], (service: CostInfoService) => {
    expect(service).toBeTruthy();
  }));
});
