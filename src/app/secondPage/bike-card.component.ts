import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-card',
  template: `
    <div>
      <p>
        BIKE
      </p>
    </div>
  `,
  styles:[`
    div {
      height:70vh;
      width:5vw;
      background-color:lightblue;
      border: solid 1px black;
      border-radius: 10px;
      float:left;
      text-align:center;
    }
    p { 
      font-size:.5em;
    }
  `]
})
export class BikeCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
