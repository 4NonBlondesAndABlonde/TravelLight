import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3-vis',
  template: `
    <div>
      <p>
        d3-vis Works!
      </p>
    </div>
  `,
  styles: [`
    div {
      margin: 0 0 0 15%;
      width:70%;
      height:60%;
      background-color: #cdc0b0;
      clear: both;
    }
  `]
})
export class D3VisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
