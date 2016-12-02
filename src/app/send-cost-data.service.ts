// import { Injectable } from '@angular/core';

// @Injectable()
// export class SendCostDataService {
//   dataStore:Object[] = [];
//   constructor() { }
//   sendData(data: Object) {
//     this.dataStore = [data]
//   }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class SendCostDataService {
  private dataStore:BehaviorSubject<Object> = new BehaviorSubject({});
  initialDataStore:Object[] = [];
  constructor(private router: Router) {  }

  getDataObservable():Observable<Object> {
    return this.dataStore.asObservable()
  }

  sendData(data: Object) {
    this.router.navigate(['loading'])
    // Load data directly the first time
    if (this.initialDataStore.length === 0) {
      this.initialDataStore = [data]
    }
    // Use observable for subsequent changes
    this.dataStore.next(data)
  }
}
