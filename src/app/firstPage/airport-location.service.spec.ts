/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AirportLocationService } from './airport-location.service';

describe('Service: AirportLocation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirportLocationService]
    });
  });

  it('should ...', inject([AirportLocationService], (service: AirportLocationService) => {
    expect(service).toBeTruthy();
  }));
});
