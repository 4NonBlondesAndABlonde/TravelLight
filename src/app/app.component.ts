import { Component, ViewContainerRef, OnInit, OnChanges, DoCheck } from '@angular/core';
import { CostInfoService } from './secondPage/cost-info.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl:
  `<router-outlet></router-outlet>`
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;
  private data:Observable<any>;
  constructor(viewContainerRef:ViewContainerRef, private costInfoService:CostInfoService) {
    //You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }

}
