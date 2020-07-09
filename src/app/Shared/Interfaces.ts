export interface ICustomer {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    provinceId?: number;
    zip: number;
    gender: string;
    OrderCount: number;
}

export interface IProduct {
    id?: string;
    Name: string;
    Quantity: number;
    Category: string;
    CustomerId?: number;
}

export interface IProvince {
    id?: string;
    abbreviation: string;
    name: string;
}

export interface IOrder {
    id?: string;
    product: string;
    price: number;
    quantity: number;
    customerId?: string;
}

export interface IPagedResults<T> {
    results: T;
    totalRecords: number;
}

export interface ICustomerResponse {
    status: boolean;
    customer: ICustomer;
}