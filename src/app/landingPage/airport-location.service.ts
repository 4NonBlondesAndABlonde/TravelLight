import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AirportLocationService {
  private airportsUrl = 'http://travel-light-env.us-west-2.elasticbeanstalk.com/api/airports';

  
  constructor(private http: Http) {}
  
  getAirports(airportSearch: string): Observable < any[] > {
    return this.http.get(this.airportsUrl)
    .map(res => {
      return res.json();
    });
  }
}
