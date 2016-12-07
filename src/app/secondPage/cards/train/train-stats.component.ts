import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-train-stats',
  template: `
    <div class='info'>
      <div class='price'>
        <p>
          $ {{cost}}
        </p>
        <i class="ionicons ion-ribbon-b {{ place }}"></i>

      </div>
      <div class='left'>
        <div *ngIf="method==='transit'">
        <h3>Public Transit</h3>
        </div>
        <div *ngIf="method==='train'">
        <h3>Train or Bus</h3>
        </div>

          <p>
          {{hours}} hours, {{ minutes }} minutes
          </p>
          <p>
          {{emissions}} lbs CO<sub>2 </sub>
          <a href="#/results" [tooltipHtml]="htmlTooltip" (tooltipStateChanged)="tooltipStateChanged($event)">
          <i class="fa fa-info-circle" aria-hidden="true"></i>
          </a>
          </p>
        </div>
      </div>
  `,
  styleUrls: ['./train-stats.component.css']
})
export class TrainStatsComponent implements OnChanges {
  constructor() {}
  @Input() costData: any;
  @Input() changes: Boolean;
  @Input() rank:number;
  @Input() method:string;
  ranking: number= this.rank;
  place: string='';
  private cost: number;
  private hours: number;
  private minutes: number;
  private emissions: number;
  trees: any=[];
  public numTrees:number=0;

  public htmlTooltip:string = '';
  public tooltipStateChanged(state: boolean):void {
  }
  @Input('tooltipHtml') public htmlContent:string;
  

  ngOnChanges() {
    if (this.costData) {
    this.ranking = this.rank
    if (this.ranking === 1) {
      this.place = 'gold';
    }
    if (this.ranking === 2) {
      this.place = 'silver';
    }
    if (this.ranking === 3) {
      this.place = 'bronze';
    }
      let data: any[] = this.costData.data
      let index: number = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].label === 'train' || data[i].label === 'transit') {
          this.method = data[i].label;
          index = i;
          break;
        }
      }
      this.cost = data[index].data[0].toFixed(2)
      this.hours = Math.floor(data[index].data[1])
      this.minutes = Math.floor((data[index].data[1] % 1)*60) 
      this.emissions = data[index].data[2].toFixed(2)
    
      this.numTrees = Math.round(this.emissions/48 * 2)/2;
      this.htmlTooltip = 'You would need to plant ' + this.numTrees + ' trees to account for the emissions during this trip'

    }
  }

}
