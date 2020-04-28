import { Injectable } from '@angular/core';

import { ICustomer } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class TrackByService {
  
  customer(index: number, customer: ICustomer) {
    return customer.id;
  }
  
}