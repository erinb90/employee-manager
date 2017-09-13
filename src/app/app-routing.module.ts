import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeDetailComponent} from "./employee-detail.component";
import {EmployeesComponent} from "./employees.component";
import {HomeComponent} from "./home.component";
import {RegisterEmployeeComponent} from "./register-employee.component";
import {TerminateEmployeeComponent} from "./terminate-employee.component";

/**
 * Created by erin.benderoff on 12/09/17.
 */
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'profile/:id', component: EmployeeDetailComponent },
    { path: 'register', component: RegisterEmployeeComponent },
    { path: 'terminate', component: TerminateEmployeeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}