import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer, IOrder, IProvince } from '../../Shared/Interfaces';
import { Observable } from 'rxjs';

import { DataService } from '../../Services/data-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: ICustomer[] = [];
  errorMessage: string;
  title: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.getCustomers();
  }

  filterChanged(filterText: string) {
    



  }

  getCustomers() {
    this.dataService.getCustomers().subscribe({
      next: customersArray => this.customers = customersArray,
      error: err => this.errorMessage = err
    });
  }
}
