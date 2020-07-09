import { Component, OnInit, Input} from '@angular/core';
import { IProduct } from 'src/app/Shared/Interfaces';

@Component({
  selector: 'app-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.css']
})
export class CustomerItemsComponent implements OnInit {
  @Input() products: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

}
