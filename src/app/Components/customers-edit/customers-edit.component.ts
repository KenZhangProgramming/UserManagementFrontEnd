import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../Services/data-service.service';
import { ICustomer, IProvince } from '../../Shared/interfaces';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {
  customerForm: FormGroup;
  customer: ICustomer = {
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    email: '',
    orderCount: 0,
    zip: 0,
    province: null,
    products: null,
    orders: null
  };
  provinces: IProvince[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getCustomer(id);
    }
    this.getProvinces();
    this.buildForm();
  }

  getCustomer(id: string) {
    this.dataService.getCustomer(id)
      .subscribe((customer: ICustomer) => {
        this.customer = customer;
        this.buildForm();
      },
        (err: any) => console.log(err));
  }

  buildForm() {
    this.customerForm = this.formBuilder.group({
      firstName:  [this.customer.firstName, Validators.required],
      lastName:   [this.customer.lastName, Validators.required],
      gender:     [this.customer.gender, Validators.required],
      email:      [this.customer.email, Validators.required],
      address:    [this.customer.address, Validators.required],
      provinceId: [this.customer.provinceId, Validators.required]
    });
}

  getProvinces() {
    this.dataService.getProvinces().subscribe((provinces: IProvince[]) => this.provinces = provinces);
  }

  submit({ value, valid }: { value: ICustomer, valid: boolean }) {
      
    value.id = this.customer.id;
    value.zip = this.customer.zip || 0; 
    // var customer: ICustomer = {
    //   id: this.customer.id,
    // };

    if (value.id) {

      this.dataService.updateCustomer(value)
        .subscribe((customer: ICustomer) => {
          if (customer) {
            this.router.navigate(['/customers']);
          }
          else {
            this.errorMessage = 'Unable to save customer';
          }
        },
        (err) => console.log(err));

    } else {

      this.dataService.insertCustomer(value)
        .subscribe((customer: ICustomer) => {
          if (customer) {
            this.router.navigate(['/customers']);
          }
          else {
            this.errorMessage = 'Unable to add customer';
          }
        },
        (err) => console.log(err));
        
    }
}

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer.id)
      .subscribe((status: boolean) => {
        if (status) {
          this.router.navigate(['/customers']);
        }
        else {
          this.errorMessage = 'Unable to delete customer';
        }
      },
        (err) => console.log(err));
  }
}
