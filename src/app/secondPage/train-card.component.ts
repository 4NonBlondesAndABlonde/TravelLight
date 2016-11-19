import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-card',
  template: `
    <div>
      <p>
        TRAIN
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
    }
    p { 
      font-size:.5em;
    }
  `]
})
export class TrainCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
