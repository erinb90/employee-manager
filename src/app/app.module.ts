import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeesComponent} from "./employees.component";
import {
  MdButtonModule, MdCardModule, MdListModule, MdSidenavModule, MdTableModule, MdTabsModule, MdToolbarModule, MdIconModule,
  MdRadioModule, MdInputModule, MdSelectModule
} from "@angular/material";
import {EmployeeDetailComponent} from "./employee-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {EmployeeService} from "./employee.service";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./home.component";
import {RegisterEmployeeComponent} from "./register-employee.component";
import {FormsModule} from "@angular/forms";
import {TerminateEmployeeComponent} from "./terminate-employee.component";

@NgModule({
  declarations: [
      AppComponent,
      EmployeesComponent,
      EmployeeDetailComponent,
      HomeComponent,
      RegisterEmployeeComponent,
      TerminateEmployeeComponent
  ],
  imports: [
    BrowserModule,
      MdListModule,
      MdCardModule,
      MdTableModule,
      AppRoutingModule,
      MdButtonModule,
      MdToolbarModule,
      HttpModule,
      MdSidenavModule,
      BrowserAnimationsModule,
      MdTabsModule,
      MdIconModule,
      MdRadioModule,
      MdInputModule,
      MdSelectModule,
      FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
