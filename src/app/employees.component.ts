import {Component, OnInit} from "@angular/core";
import {Employee} from "./employee";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/merge';
import {Router} from "@angular/router";
import {EmployeeService} from "./employee.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

/**
 * Created by erin.benderoff on 12/09/17.
 */
@Component({
    selector: '<employee-list></employee-list>',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    constructor(private router: Router,
                private employeeService: EmployeeService) {}

    displayedColumns = ['id', 'first-name', 'last-name', 'gender', 'department', 'profile'];
    dataSource: TableDataSource;

    ngOnInit(): void {
        this.dataSource = new TableDataSource(this.employeeService);
    }

    goToProfile(id: number): void {
        this.router.navigate(['/profile', id]);
    }

}

export class TableDataSource extends DataSource<any> {
    constructor(private employeeService: EmployeeService) {
        super();
    }

    subject: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);

    connect(): Observable<Employee[]> {
        if (!this.subject.isStopped)
            this.employeeService.getAllEmployees()
                .then(res => {
                    this.subject.next(res);
                });
        return Observable.merge(this.subject);
    }

    disconnect() {
        this.subject.complete();
        this.subject.observers = [];
    }
}


