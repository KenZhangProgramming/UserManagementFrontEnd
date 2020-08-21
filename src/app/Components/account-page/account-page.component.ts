import { Component, OnInit } from '@angular/core';
import { IProduct, ICustomer } from 'src/app/Shared/Interfaces';
import { DataService } from '../../Services/data-service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  products: IProduct[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.getCustomer(id);
    }
  }

  getCustomer(id: string) {
    this.dataService.getCustomer(id)
      .subscribe((customer: ICustomer) => {
        this.customer = customer;
        this.products = customer.products;
      },
        (err: any) => console.log(err));
  }
}
