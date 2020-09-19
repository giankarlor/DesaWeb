import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/entities/employee.entity';
import { EmployeeService } from '../../../services/employee.service';
import { FormEmployeeComponent } from '../form-employee/form-employee.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  metaColumns = [
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
  ];

  list = [];

  constructor(
    private readonly employee: EmployeeService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.list = this.employee.getAll();
  }

  openForm(employee: Employee = null): void {
    const ref: MatDialogRef<FormEmployeeComponent> = this.dialog.open(
      FormEmployeeComponent,
      {
        width: '400px',
        data: employee,
        disableClose: true,
      }
    );
  }
}
