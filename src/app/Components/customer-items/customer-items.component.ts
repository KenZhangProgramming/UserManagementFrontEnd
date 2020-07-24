import { Component, OnInit, Input} from '@angular/core';
import { IProduct } from 'src/app/Shared/Interfaces';

@Component({
  selector: 'app-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.css']
})
export class CustomerItemsComponent implements OnInit {
  @Input() products: IProduct[] = [];
  editField: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateList(id: string, property: string, textcontent: string) {
    const editField = textcontent;
    const targetProduct = this.products.filter(product => product.id === id);
    targetProduct[property] = textcontent;
    console.log(this.products);
  }


  changeValue(id: string, textcontent: string) {
    this.editField = textcontent;
  }
}
