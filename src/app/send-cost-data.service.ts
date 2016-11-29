import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class SendCostDataService {
  private dataStore:BehaviorSubject<Object> = new BehaviorSubject({});
  initialDataStore:Object[] = [];
  constructor() {  }


  getDataObservable():Observable<Object> {
    return this.dataStore.asObservable()
  }

  sendData(data: Object) {
    // Load data directly the first time
    if (this.initialDataStore.length === 0) {
      this.initialDataStore = [data]
    }
    // Use observable for subsequent changes
    this.dataStore.next(data)
  }
}
