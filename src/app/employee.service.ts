/**
 * Created by erin.benderoff on 12/09/17.
 */
import {Injectable} from "@angular/core";
import {Employee} from "./employee";
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
    private apiUrl = 'http://localhost:8080/employees';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(
        private http: Http
    ) {}

    getAllEmployees(): Promise<Employee[]> {
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json()._embedded.employees as Employee[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getEmployeeById(id: number): Promise<Employee> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get(url, {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Employee)
            .catch(this.handleError);
    }

    update(employee: Employee): Promise<Employee> {
        const url = `${this.apiUrl}/${employee.id}`;
        return this.http
            .put(url, JSON.stringify(employee), {headers: this.headers})
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    create(firstName: string, lastName: string, gender: string, department: string): Promise<Employee> {
        return this.http
            .post(this.apiUrl, JSON.stringify({firstName: firstName, lastName: lastName, gender: gender, department: department}),
                {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Employee)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
