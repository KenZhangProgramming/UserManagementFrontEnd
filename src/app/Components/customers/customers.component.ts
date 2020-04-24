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
  customers: Observable<ICustomer[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customers = this.dataService.getCustomers();
    var test = this.dataService.getCustomers().subscribe(val => console.log(val));
    console.log(test);
  }

}
