import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entities/user.entitiy';
import mockUsers from '../mocks/users.json';
import { NotifierService } from '../helpers/services/notifier.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userLogged = false;
  private onChangeStatusUser: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly router: Router,
    private readonly notifier: NotifierService
  ) {}

  login(user: User): void {
    const userMatched = mockUsers.find(
      (el) =>
        el.email.toLowerCase() === user.email.toLowerCase() &&
        el.password === user.password
    );

    if (userMatched) {
      this.userLogged = true;
      this.onChangeStatusUser.next(true);
      this.router.navigate(['/']);
    } else {
      this.notifier.message('Datos incorrectos');
    }
  }

  logout(): void {
    this.onChangeStatusUser.next(false);
    this.userLogged = false;
    this.router.navigate(['/']);
  }

  getStatusUser(): Observable<any> {
    return this.onChangeStatusUser.asObservable();
  }

  get isUserLogged(): boolean {
    return this.userLogged;
  }
}
