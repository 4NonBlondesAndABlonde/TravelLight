import { Component, ViewContainerRef } from '@angular/core';
import { CostInfoService } from './secondPage/cost-info.service';
import 'rxjs/add/operator/map';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl:
  `<router-outlet></router-outlet>`
  ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private viewContainerRef: ViewContainerRef;
  constructor(viewContainerRef: ViewContainerRef, private costInfoService: CostInfoService) {
    this.viewContainerRef = viewContainerRef;
  }
}