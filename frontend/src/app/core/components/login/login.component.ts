import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../entities/user.entitiy';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  group: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    this.settingForm();
  }

  settingForm(): void {
    this.group = this.fb.group({
      email: ['correo1@correo.com', [Validators.required, Validators.email]],
      password: ['12345', Validators.required],
    });
  }

  login(): void {
    const user: User = this.group.value;
    this.auth.login(user);
  }
}
