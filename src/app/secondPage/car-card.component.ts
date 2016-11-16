import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-card',
  template: `
    <div>
      <p>CAR</p>
      <app-comp-stats></app-comp-stats>
      <app-d3-vis></app-d3-vis>
    </div>
  `,
  styles: [`    
    div {
      height: 70vh;
      width: 40vw;
      background-color:lightblue;
      border: solid 1px black;
      border-radius: 10px;
      float: left;
    }
    p{
      margin-right: 5%;
      text-align:right;
      font-size:.5em;
    }
  `]
})
export class CarCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
