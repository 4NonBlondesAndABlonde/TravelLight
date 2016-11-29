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

  private walkingBaseUrl = 'http://localhost:1337/api/walking';
  private planeBaseUrl = 'http://localhost:1337/api/planes';
  private averagesBaseUrl = 'http://localhost:1337/api/normalizers';
  private carBaseUrl = 'http://localhost:1337/api/cars';
  private transitBaseUrl = 'http://localhost:1337/api/transit';
  private trainsBaseUrl = 'http://localhost:1337/api/trains';

  private travelInfo: TravelInfo[] = [];
  private averageData: { data: any[], distance: number };
  private normalizedData: TravelInfo[];
  private cityNames: {destination: string, origin:string};
  private tripType: string
  private planeInfoUrl: string;
  private averagesUrl: string;
  private carInfoUrl: string;
  private transitUrl:string;
  private trainsUrl:string;
  private walkingInfoUrl:string;

  private bestCost:string = '';
  private bestTime: string= '';
  private bestEmissions: string='';

  constructor(private http: Http, private _ngZone:NgZone) { }

  // Get stub data
  sendStubData() {
    return new Observable(observer => {
      console.log({data: TRAVELDATA, normalizedData: NORMALIZERS})
      observer.next({data: TRAVELDATA, normalizedData: NORMALIZERS, cities: {origin: 'ATL', destination: 'PHL'}, tripType: 'distant'})

    })
  }


  sendUserInput(userInput:{originLat:number, originLng:number, destinationLat:number, destinationLng:number, originDriveLatitude:number, originDriveLongitude:number, destinationDriveLatitude:number, destinationDriveLongitude:number, travelers:number, date:string, originAirportCode:string, destinationAirportCode:string, tripType:string}) {
    return new Observable(observer => {

      console.log(userInput);
      this.tripType = userInput.tripType
      this.planeInfoUrl = this.planeBaseUrl + `/${userInput.originAirportCode}/${userInput.destinationAirportCode}/${userInput.date}/${userInput.travelers}/${userInput.originLat}/${userInput.originLng}/${userInput.destinationLat}/${userInput.destinationLng}`;
      this.averagesUrl = this.averagesBaseUrl + `/${userInput.travelers}/${userInput.originDriveLatitude}/${userInput.originDriveLongitude}/${userInput.destinationDriveLatitude}/${userInput.destinationDriveLongitude}/${userInput.tripType}`;
      this.carInfoUrl = this.carBaseUrl + `/${userInput.originLat}/${userInput.originLng}/${userInput.destinationLat}/${userInput.destinationLng}/${userInput.originDriveLatitude}/${userInput.originDriveLongitude}/${userInput.destinationDriveLatitude}/${userInput.destinationDriveLongitude}`;
      this.transitUrl = this.transitBaseUrl + `/${userInput.originDriveLatitude}/${userInput.originDriveLongitude}/${userInput.destinationDriveLatitude}/${userInput.destinationDriveLongitude}/${userInput.travelers}`;
      this.trainsUrl = this.trainsBaseUrl + `/${userInput.originAirportCode}/${userInput.destinationAirportCode}/${userInput.travelers}/${userInput.date}/${this.getDistance([userInput.originLat, userInput.originLng],[userInput.destinationLat, userInput.destinationLng])}`
      this.walkingInfoUrl = this.walkingBaseUrl + `/${userInput.originDriveLatitude}/${userInput.originDriveLongitude}/${userInput.destinationDriveLatitude}/${userInput.destinationDriveLongitude}`;
      let urlArray = [];
      if (userInput.tripType === 'distant') {
        urlArray.push(this.http.get(this.carInfoUrl), this.http.get(this.planeInfoUrl), this.http.get(this.trainsUrl), this.http.get(this.averagesUrl))
      } else if (userInput.tripType === 'local') {
        urlArray.push(this.http.get(this.carInfoUrl), this.http.get(this.transitUrl), this.http.get(this.walkingInfoUrl), this.http.get(this.averagesUrl))
      }
      console.log(urlArray)
      this.getCosts(urlArray)
      .subscribe(data => observer.next(data))
    })
  }

  getDistance(coor1:number[], coor2:number[]) {
    let [lat1, lon1] = coor1;
    let [lat2, lon2] = coor2;
    let R = 3959; // miles
    let φ1 = lat1 * Math.PI / 180;
    let φ2 = lat2 * Math.PI / 180;
    let Δφ = (lat2-lat1) * Math.PI / 180;
    let Δλ = (lon2-lon1) * Math.PI / 180;

    let a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    let distance = R * c;
    return distance
  }

  getCosts(urlArray:any[]) {
    return Observable.forkJoin(urlArray)
    .map(results => results.map(<Response>(res) => res.json()))
    .map(result => {
      console.log(result)
      this.cityNames = result[0].tripInfo
      this.travelInfo = [];
      this.travelInfo.push({
        data: [result[0].car.cost, result[0].car.time, result[0].car.emissions],
        label: result[0].car.mode
      })
      if (this.tripType === 'distant') {
        this.travelInfo.push({
          data: [result[0].carToAir.cost + result[1].cost, result[0].carToAir.time + result[1].time, result[0].carToAir.emissions + result[1].emissions],
          label: result[1].mode
        })
      } else if (this.tripType === 'local') {
        this.travelInfo.push({
          data: [result[1].cost, result[1].time, result[1].emissions],
          label: result[1].mode
        })
      }
      this.travelInfo.push({
        data: [result[2].cost, result[2].time, result[2].emissions],
        label: result[2].mode
      })
      console.log('Travel info array: ' + this.travelInfo)
      let averages = result[result.length - 1]
      this.averageData = {
        distance: averages.distance,
        data: [averages.cost, averages.time, averages.emissions]
      }
      this.normalizedData = this.travelInfo.map(travelMethod => {
        let travelData: any[] = travelMethod.data.map((item, i) => {
          return (item / this.averageData.data[i]).toFixed(2)
        })
        return {
          data: travelData,
          label: travelMethod.label
        }
      })
      this.getRankings();
      console.log('should return ' + {data: this.travelInfo, normalizedData: this.normalizedData, cities: this.cityNames})
      return {data: this.travelInfo, normalizedData: this.normalizedData, cities: this.cityNames, tripType:this.tripType, bestCost:this.bestCost, bestTime:this.bestTime, bestEmissions:this.bestEmissions}
    })
  }

  getRankings() {
//getting best cost  
      if (this.travelInfo[0].data[0] < this.travelInfo[1].data[0] &&
        this.travelInfo[0].data[0] < this.travelInfo[2].data[0]) {
        this.bestCost = this.travelInfo[0].label; 
      }
      if (this.travelInfo[1].data[0] < this.travelInfo[0].data[0] &&
        this.travelInfo[1].data[0] < this.travelInfo[2].data[0]) {
        this.bestCost = this.travelInfo[1].label;
      }
      if (this.travelInfo[2].data[0] < this.travelInfo[0].data[0] &&
        this.travelInfo[2].data[0] < this.travelInfo[1].data[0]) {
        this.bestCost = this.travelInfo[2].label;
      }
//getting best time
      if (this.travelInfo[0].data[1] < this.travelInfo[1].data[1] &&
        this.travelInfo[0].data[1] < this.travelInfo[2].data[1]) {
        this.bestTime = this.travelInfo[0].label;

      }
      if (this.travelInfo[1].data[1] < this.travelInfo[0].data[1] &&
        this.travelInfo[1].data[1] < this.travelInfo[2].data[1]) {
        this.bestTime = this.travelInfo[1].label;   
      }
      if (this.travelInfo[2].data[1] < this.travelInfo[0].data[1] &&
        this.travelInfo[2].data[1] < this.travelInfo[1].data[1]) {
        this.bestTime = this.travelInfo[2].label;
      }
//getting best emissions
      if (this.travelInfo[0].data[2] < this.travelInfo[1].data[2] &&
        this.travelInfo[0].data[2] < this.travelInfo[2].data[2]) {
        this.bestEmissions = this.travelInfo[0].label;
      }
      if (this.travelInfo[1].data[2] < this.travelInfo[0].data[2] &&
        this.travelInfo[1].data[2] < this.travelInfo[2].data[2]) {
        this.bestEmissions = this.travelInfo[1].label;
      }
      if (this.travelInfo[2].data[2] < this.travelInfo[0].data[2] &&
        this.travelInfo[2].data[2] < this.travelInfo[1].data[2]) {
        this.bestEmissions = this.travelInfo[2].label;
      }
  }




}
