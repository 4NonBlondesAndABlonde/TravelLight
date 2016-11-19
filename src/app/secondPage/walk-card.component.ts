import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk-card',
  template: `
    <div>
      <p>
        WALK
      </p>
    </div>
  `,
  styles:[`
    div {
      background-color:lightblue;
      border: solid 1px black;
      border-radius: 10px;
      height:70vh;
      width:5vw;
      float:left;
      text-align:center;
      margin: 0 0 0 .5%;
    }
    p { 
      font-size:.5em;
    }
  `]
})
export class WalkCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
