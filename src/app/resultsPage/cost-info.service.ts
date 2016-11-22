import { Injectable, EventEmitter, Output, NgZone } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TravelInfo } from './travelInfo';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
import { TRAVELDATA, NORMALIZERS } from './stubData';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CostInfoService {
  private planeBaseUrl = 'http://localhost:1337/api/planes';
  private averagesBaseUrl = 'http://localhost:1337/api/normalizers';
  private carBaseUrl = 'http://localhost:1337/api/cars';
  private travelInfo: TravelInfo[] = [];
  private averageData: { data: any[], distance: number };
  private normalizedData: TravelInfo[];
  private planeInfoUrl: string;
  private averagesUrl: string;
  private carInfoUrl: string;

  constructor(private http: Http, private _ngZone:NgZone) { }

  // Get stub data
  sendStubData() {
    return new Observable(observer => {
      console.log({data: TRAVELDATA, normalizedData: NORMALIZERS})
      observer.next({data: TRAVELDATA, normalizedData: NORMALIZERS})
    })
  }
   

  sendUserInput(userInput:{originLat:Number, originLng:Number, destinationLat:Number, destinationLng:Number, originDriveLatitude:Number, originDriveLongitude:Number, destinationDriveLatitude:Number, destinationDriveLongitude:Number, travelers:Number, date:string, originAirportCode:string, destinationAirportCode:string}) {
    return new Observable(observer => {
      this.planeInfoUrl = this.planeBaseUrl + `/${userInput.originAirportCode}/${userInput.destinationAirportCode}/${userInput.date}/${userInput.travelers}/${userInput.originLat}/${userInput.originLng}/${userInput.destinationLat}/${userInput.destinationLng}`
      this.averagesUrl = this.averagesBaseUrl + `/${userInput.travelers}/${userInput.originLat}/${userInput.originLng}/${userInput.destinationLat}/${userInput.destinationLng}`
      this.carInfoUrl = this.carBaseUrl + `/${userInput.originLat}/${userInput.originLng}/${userInput.destinationLat}/${userInput.destinationLng}/${userInput.originDriveLatitude}/${userInput.originDriveLongitude}/${userInput.destinationDriveLatitude}/${userInput.destinationDriveLongitude}`
      this.getCosts()
      .subscribe(data => observer.next(data))
    })
  }

  getCosts() { return Observable.forkJoin(
      this.http.get(this.carInfoUrl),
      this.http.get(this.planeInfoUrl),
      this.http.get(this.averagesUrl)
    )
    .map(results => results.map(res => res.json()))
    .map(result => {
      this.travelInfo.push({
        data: [result[0].car.cost, result[0].car.time, result[0].car.emissions],
        label: result[0].car.mode
      })
      this.travelInfo.push({
        data: [result[0].carToAir.cost + result[1].cost, result[0].carToAir.time + result[1].time, result[0].carToAir.emissions + result[1].emissions],
        label: result[1].mode
      })
      let averages = result[result.length - 1]
      this.averageData = {
        distance: averages.distance,
        data: [averages.cost, averages.time, averages.emissions]
      }
      this.normalizedData = this.travelInfo.map(travelMethod => {
        let travelData: any[] = travelMethod.data.map((item, i) => {
          return item / this.averageData.data[i]
        })
        return {
          data: travelData,
          label: travelMethod.label
        }        
      })
      return {data: this.travelInfo, normalizedData: this.normalizedData}
    })
  }
}
