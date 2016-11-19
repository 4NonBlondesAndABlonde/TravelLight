import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class PassDataService {
  
  //private data = new BehaviorSubject<String>("");
  //data$: Observable<any>

  constructor() { 
    //this.data$ = this.data.asObservable()
    //this.data$.subscribe(data => console.log(data))
    //this.userInput.subscribe(data => console.log(data))
  }

  // addData(userInput){
  //   this.data.next("Should Display")
  // }
  // get userInput() {
  //   return new Observable(observer => {

  //   })
  // }


}