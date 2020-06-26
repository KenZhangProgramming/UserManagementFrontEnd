import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { CustomersGridComponent } from './Components/customers-grid/customers-grid.component';
import { CustomersEditComponent } from './Components/customers-edit/customers-edit.component';
import { DataService } from './Services/data-service.service';
import { FilterTextboxComponent } from './Shared/Components/filter-textbox/filter-textbox.component';
import { PaginationComponent } from './Shared/Components/pagination/pagination.component';
import { ProductsComponent } from './Components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersGridComponent,
    CustomersEditComponent,
    FilterTextboxComponent,
    PaginationComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
