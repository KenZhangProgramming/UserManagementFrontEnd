import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/Interfaces';
import { DataService } from '../../Services/data-service.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCustomerProducts("1");
  }

  getCustomerProducts(customerId: string) {
    this.dataService.getCustomerProducts(customerId)
    .subscribe((products: IProduct[]) => {
      this.products = products;
    },
    (err: any) => console.log(err),
    () => console.log('getCustomersPage() retrieved customers'));
  }
}
