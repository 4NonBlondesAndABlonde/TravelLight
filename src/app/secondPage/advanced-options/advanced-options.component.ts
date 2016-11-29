import { Component, OnInit } from '@angular/core';
import { ModalDirective } from '../../../../node_modules/ng2-bootstrap/components/modal/modal.component';
import { SendCostDataService } from '../../send-cost-data.service';

@Component({
  selector: 'app-advanced-options',
  templateUrl: './advanced-options.component.html',
  styleUrls: ['./advanced-options.component.css']
})
export class AdvancedOptionsComponent implements OnInit {

  constructor(private sendCostDataService: SendCostDataService) { }

  ngOnInit() {
  }

}
