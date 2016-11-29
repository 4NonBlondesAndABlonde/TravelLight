import { Component } from '@angular/core';
import { SendCostDataService } from '../send-cost-data.service';
import { MdSlider } from '@angular2-material/slider'
import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-results',
  templateUrl: './second.page.component.html',
  styleUrls: ['./second.page.component.css']
})
export class ResultsComponent {
  constructor(private sendCostDataService: SendCostDataService) {}
  private costData: Object;
  public sliderValue: number;
  ngOnInit() {
    // Load initial data
    this.costData = this.sendCostDataService.initialDataStore[0];
    // Subscribe to changes
    this.sendCostDataService.getDataObservable().subscribe(data => {
      console.log('observed change ' + data)
      this.costData = data;
      console.log(this.costData)
    })
  }
}
