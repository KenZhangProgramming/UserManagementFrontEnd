import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/Interfaces';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  products: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = [
      { "id": "1", "Name": "Deer Meat", "Quantity": 2, "Category": "Hunting", "CustomerId": 1},
      { "id": "2", "Name": "Bass", "Quantity": 3, "Category": "Fishing", "CustomerId": 2},
      { "id": "3", "Name": "Goose", "Quantity": 4, "Category": "Fishing", "CustomerId": 3},
      { "id": "1", "Name": "Perch", "Quantity": 5, "Category": "Fishing", "CustomerId": 4}
    ];
  }

}
