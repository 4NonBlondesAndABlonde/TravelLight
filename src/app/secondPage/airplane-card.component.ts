import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airplane-card',
  template: `
    <div class = 'outer'>
      <div class='tab'>
        <p>PLANE</p>
        <img src='../assets/airplaneIcon.png'/>
      </div>
      <app-plane-stats></app-plane-stats>
      <app-d3-vis
      transportMode="plane">
      </app-d3-vis>
    </div>
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
      margin-right: 5%;
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
export class AirplaneCardComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
