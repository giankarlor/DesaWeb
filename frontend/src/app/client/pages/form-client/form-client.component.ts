import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormEmployeeComponent } from 'src/app/employee/pages/form-employee/form-employee.component';
import { Client } from '../../../entities/client.entity';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent implements OnInit {
  group: FormGroup;
  title = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reference: MatDialogRef<FormClientComponent>,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.settingTitle();
    this.settingForm();
  }

  settingTitle(): void {
    this.title = this.data ? 'Edición' : 'Nuevo';
  }

  settingForm(): void {
    this.group = this.fb.group({
      id: [this.data?.id],
      name: [this.data?.name, Validators.required],
      lastname: [this.data?.lastname, Validators.required],
      nit: [this.data?.nit, Validators.required],
    });
  }

  action(): void {
    const client: Client = this.group.value;
    this.reference.close(client);
  }
}
