import { Injectable } from '@angular/core';

@Injectable()
export class SendCostDataService {
  dataStore:Object[] = [];
  constructor() { }
  sendData(data: Object) {
    this.dataStore.push(data)
  }
}
