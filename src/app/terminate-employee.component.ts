/**
 * Created by erin.benderoff on 13/09/17.
 */
import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {Employee} from "./employee";
@Component({
    selector: 'terminate-employee',
    templateUrl: './terminate-employee.component.html'
})
export class TerminateEmployeeComponent implements OnInit {
    constructor(private employeeService: EmployeeService) {}

    selectedId: number;
    employees: Employee[];
    response = '';

    ngOnInit(): void {
        this.employeeService.getAllEmployees().then(employees => this.employees = employees);
    }

    terminate() {
        this.employeeService.delete(this.selectedId);
        this.response = 'Employee terminated!';
    }
}