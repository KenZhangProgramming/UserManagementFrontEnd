import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer, IOrder, IProvince } from '../../Shared/Interfaces';
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

  constructor(private dataService: DataService,
    private dataFilter: DataFilterService) { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.getCustomers();
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

  getCustomers() {
    this.dataService.getCustomers().subscribe({
      next: customersArray => this.customers = customersArray,
      error: err => this.errorMessage = err
    });
  }
}
