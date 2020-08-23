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

  add(){
    const product = {"id": "1", "Name": "", "Quantity": null, "Category": "", "CustomerId": 1};
    this.products.push(product);
  }

  save(){}
  
  remove(product: IProduct){
    const productIndex = this.products.findIndex(p => p === product);
    if (productIndex > -1) {
      this.products.splice(productIndex, 1);
   }
    console.log("test");
  }

  updateList(id: string, property: string, textcontent: string) {
    const editField = textcontent;
    const targetProduct = this.products.filter(product => product.id === id);
    targetProduct[property] = textcontent;
  }


  changeValue(id: string, textcontent: string) {
    this.editField = textcontent;
  }
}
