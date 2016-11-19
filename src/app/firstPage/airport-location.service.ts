import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AirportLocationService {

  constructor(private http: Http) {}
  private airportsUrl = 'http://localhost:1337/api/airports';

  getAirports(airportSearch: string): Observable < any[] > {
    return this.http.get(this.airportsUrl)
    .map(res => {
      return res.json()
    })
  }
  
}