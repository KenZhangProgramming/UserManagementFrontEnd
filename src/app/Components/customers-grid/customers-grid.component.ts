import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { ICustomer, IOrder, IProvince } from '../../Shared/Interfaces';
import { TrackByService } from '../../Shared/Functions/trackby.service';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomersGridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];

  constructor(public trackby: TrackByService) { }

  ngOnInit(): void {
  }

}
