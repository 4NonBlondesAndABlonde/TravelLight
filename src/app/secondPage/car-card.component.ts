import { Component, OnInit } from '@angular/core';
import { D3VisComponent } from './d3-vis.component'

@Component({
  selector: 'app-car-card',
  template: `
    <div class = 'outer'>
      <div class='tab'>
        <p>CAR</p>
        <img src='../assets/carIcon.png'/>
      </div>
      <app-car-stats></app-car-stats>
      <app-d3-vis transportMode="car">
      </app-d3-vis>
  `,
  styles: [`    
   .outer {
      height: 70vh;
      width: 40vw;
      background-color:lightblue;
      border: solid 1px black;
      border-radius: 10px;
      float:left;
    }
    p{
      margin-right: 6%;
      text-align:right;
      font-size:.5em;
      margin-bottom:0;
    }
    img {
      height: 5%;
      width: 5%;
      margin-right: 5%;
      float: right;
    }
    .tab {
      float: right;
      width: 100%;
    }
  `]
})
export class CarCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
