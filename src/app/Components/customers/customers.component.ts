import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer, IOrder, IProvince, IPagedResults } from '../../Shared/Interfaces';
import { Observable } from 'rxjs';

import { DataService } from '../../Services/data-service.service';
import { DataFilterService } from '../../Services/data-filter-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  errorMessage: string;
  title: string;

  totalRecords: number = 0;
  pageSize: number = 2;

  constructor(private dataService: DataService,
    private dataFilter: DataFilterService) { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.getCustomersPage(1);
  }

  filterChanged(filterText: string) {
    if (filterText && this.customers) {
      let props = 'firstName';
      this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }

  getCustomersPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<ICustomer[]>) => {
          this.customers = this.filteredCustomers = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getCustomersPage() retrieved customers'));
  }
}
