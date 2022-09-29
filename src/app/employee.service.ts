import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private apiServiceUrl = 'http://127.0.0.1:8081/api/v1/employees';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('${this.apiServiceUrl}');
  }

  public addEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>('${this.apiServiceUrl}', employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.put<Employee[]>('${this.apiServiceUrl}', employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>('${this.apiServiceUrl}/${employeeId}');
  }
}
