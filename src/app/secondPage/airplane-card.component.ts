import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airplane-card',
  template: `
    <div>
      <p>PLANE</p>
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
export class AirplaneCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
