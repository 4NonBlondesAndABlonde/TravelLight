import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <div>
      <p>
        banner Works!
      </p>
    </div>
  `,
  styles: [`
      div {
        background:url('../assets/green-banner.jpg')
        height: 10%;
        width: 100%;
        background-color: blue;
        color: white; 
        border: solid 2px gray;
      }  
      p {
        margin: 2% 0 0 10%
      }
    `
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
