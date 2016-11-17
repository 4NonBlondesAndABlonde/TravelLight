import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-d3-vis',
  template: `
    <div>
      <app-radar-chart
      [transportMode]='transportMode'>
      </app-radar-chart>
    </div>
  `,
  styles: [`
    div {
      margin-left: 8%;
      width:70%;
      height:60%;
      // background-color: #cdc0b0;
      clear: both;
    }
  `]
})
export class D3VisComponent implements OnInit {

  constructor() { }
  @Input() transportMode: string;
  ngOnInit() {
  }

}
