import { Injectable } from '@angular/core';
import mockEmployees from '../mocks/employees.json';
import { Employee } from '../entities/employee.entity';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getAll(): Employee[] {
    const employees = [...mockEmployees];
    return employees;
  }
}
