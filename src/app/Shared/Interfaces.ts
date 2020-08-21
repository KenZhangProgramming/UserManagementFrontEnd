export interface ICustomer {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    province: IProvince;
    provinceId?: number;
    zip: number;
    gender: string;
    orderCount: number;
    orders: IOrder[];
    products: IProduct[];
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