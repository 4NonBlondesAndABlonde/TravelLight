import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}

