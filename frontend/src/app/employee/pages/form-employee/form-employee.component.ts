import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css'],
})
export class FormEmployeeComponent implements OnInit {
  group: FormGroup;
  title = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reference: MatDialogRef<FormEmployeeComponent>,
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
      name: [this.data?.name, Validators.required],
      lastname: [this.data?.lastname, Validators.required],
    });
  }

  action(): void {}
}
