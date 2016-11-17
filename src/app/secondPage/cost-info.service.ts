import { Injectable } from '@angular/core';
import { TravelInfo } from './travelInfo';
import { TRAVELDATA, NORMALIZERS } from './stubData';

@Injectable()
export class CostInfoService {
  getCosts(): Promise<any> {
    let NORMALIZEDTRAVELDATA: any = TRAVELDATA.map(travelMethod => {
      let travelData: any[] = travelMethod.data.map((item, i) => {
        return item / NORMALIZERS.data[i]
      })
      return {
        data: travelData,
        label: travelMethod.label
      }
    })
    return Promise.resolve({data: TRAVELDATA, normalizedData: NORMALIZEDTRAVELDATA})
  }
}
