import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersGridComponent,
    CustomersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
