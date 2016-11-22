
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <div class='flex-container'>
      <div class='banner flex-item'>
        
          <a class='newsearch' routerLink="/home" routerLinkActive="active">
           <p> Travel Light</p>
          </a>
        
        <app-search-bar></app-search-bar>
      </div>
    </div>
  `,
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


