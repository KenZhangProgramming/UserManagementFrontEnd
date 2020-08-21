import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ICustomer, IOrder, IProvince, ICustomerResponse, IPagedResults, IProduct } from '../shared/interfaces';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.apiUrl;
  baseCustomersUrl = this.baseUrl + 'customers';
  baseProvincesUrl = this.baseUrl + 'provinces';
  baseProductsUrl = this.baseUrl + '/products/customerId';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseCustomersUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  getCustomersPage(page: number, pageSize: number) : Observable<IPagedResults<ICustomer[]>>{
    return this.http.get<ICustomer[]>(`${this.baseCustomersUrl}/page/${page}/${pageSize}`, {observe: 'response'})
            .pipe(            
                map((res) => {
                    //Need to observe response in order to get to this header (see {observe: 'response'} above)
                    const totalRecords = +res.headers.get('x-inlinecount');
                    let customers = res.body as ICustomer[];
                    //this.calculateCustomersOrderTotal(customers);
                    return {
                        results: customers,
                        totalRecords: totalRecords
                    };
                }),
                catchError(this.handleError)
            );
  }

  getCustomer(id: string): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.baseCustomersUrl + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getProvinces(): Observable<IProvince[]> {
    return this.http.get<IProvince[]>(this.baseProvincesUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomerResponse>(this.baseCustomersUrl + '/' + customer.id, customer)
      .pipe(
        map((data) => {
          console.log('updateCustomer status: ' + data.status);
          return data.customer;
        }),
        catchError(this.handleError)
      );
  }

  insertCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomerResponse>(this.baseCustomersUrl, customer)
      .pipe(
        map((data) => {
          console.log('insertCustomer status: ' + data.status);
          return data.customer;
        }),
        catchError(this.handleError)
      );
  }

  deleteCustomer(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.baseCustomersUrl + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'ASP.NET Core server error');
  }
}
