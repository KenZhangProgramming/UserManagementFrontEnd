import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { CustomersGridComponent } from './Components/customers-grid/customers-grid.component';
import { CustomersEditComponent } from './Components/customers-edit/customers-edit.component';
import { DataService } from './Services/data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersGridComponent,
    CustomersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
