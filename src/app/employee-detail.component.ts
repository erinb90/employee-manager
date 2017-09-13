/**
 * Created by erin.benderoff on 12/09/17.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Employee} from "./employee";
import 'rxjs/add/operator/switchMap';
import {EmployeeService} from "./employee.service";
import { Location } from '@angular/common';

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {
    employee: Employee;
    response = '';
    error = '';
    hasError = false;
    constructor(
        private route: ActivatedRoute,
        private employeeService: EmployeeService,
        private location: Location
    ) {}

    gender = [
        {value: 'M', viewValue: 'Male'},
        {value: 'F', viewValue: 'Female'}
    ];

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.employeeService.getEmployeeById(+params.get('id')))
            .subscribe(employee => this.employee = employee);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        if (this.employee.firstName === '' || this.employee.lastName === '' || this.employee.department === '') {
            this.hasError = true;
            this.error = 'Error: fields cannot be blank';
            return;
        }
        this.employeeService.update(this.employee)
            .then( () => { this.response = 'Employee details updated!'; } );
    }
}