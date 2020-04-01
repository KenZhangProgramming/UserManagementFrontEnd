import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';

const routes: Routes = [
  { path: '', component: CustomersComponent, pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent},
  { path: 'customers/:id', component: CustomersEditComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/customers'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
