import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarInfoService {
  private carModelUrl = 'http://travel-light-env.us-west-2.elasticbeanstalk.com/api/carModels'
  constructor(private http: Http) { }

  getCars(carSearch: string): Observable < any[] > {
    return this.http.get(this.carModelUrl)
    .map(res => {
      return res.json();
    })
  }
}
