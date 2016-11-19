
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <div class='container'>
      <div class='banner'>
        <p>
          <a class='newsearch' routerLink="/home" routerLinkActive="active">
            Travel Light
          </a>
        </p>
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


