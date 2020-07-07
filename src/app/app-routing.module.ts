import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './Components/customers/customers.component';
import { CustomersGridComponent } from './Components/customers-grid/customers-grid.component';
import { CustomersEditComponent } from './Components/customers-edit/customers-edit.component';
import { ProductsComponent } from './Components/products/products.component';
import {AccountPageComponent} from './Components/account-page/account-page.component'; 


const routes: Routes = [
  { path: '', component: CustomersComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'accountpage', component: AccountPageComponent},
  { path: '', component: CustomersComponent, pathMatch: 'full' },
  { path: 'customers/:id', component: CustomersEditComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/customers'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
