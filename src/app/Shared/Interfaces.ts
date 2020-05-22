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

export interface ICustomerResponse {
    status: boolean;
    customer: ICustomer;
}