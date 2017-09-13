/**
 * Created by erin.benderoff on 13/09/17.
 */
import {Component} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {FormGroup} from "@angular/forms";
@Component({
    selector: 'register-employee',
    templateUrl: './register-employee.component.html'
})
export class RegisterEmployeeComponent {
    constructor(
        private employeeService: EmployeeService
    ) {}

    response = '';
    error = '';
    selectedGender: string;
    hasError = false;

    gender = [
        {value: 'M', viewValue: 'Male'},
        {value: 'F', viewValue: 'Female'}
    ];

    register(firstName: string, lastName: string, department: string) {
        if (!firstName || !lastName || !department || this.selectedGender == null) {
            this.hasError = true;
            this.error = 'Error: one or more fields is not filled out';
            return;
        }
        firstName = firstName.trim();
        lastName = lastName.trim();
        department = department.trim();
        this.employeeService.create(firstName, lastName, this.selectedGender, department)
            .then( () => { this.response = 'Employee registered!'; } );
    }

}
