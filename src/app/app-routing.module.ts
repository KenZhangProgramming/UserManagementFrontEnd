import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './Components/customers/customers.component';
import { CustomersGridComponent } from './Components/customers-grid/customers-grid.component';
import { CustomersEditComponent } from './Components/customers-edit/customers-edit.component';
import {  ProductsComponent  } from './Components/products/products.component';

const routes: Routes = [
  { path: '', component: CustomersComponent, pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'customers/:id', component: CustomersEditComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/customers'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
