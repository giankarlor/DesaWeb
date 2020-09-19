import { Component, OnDestroy, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  isVisibleButtonLogin = true;

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.auth
      .getStatusUser()
      .subscribe((status: boolean) => {
        this.isVisibleButtonLogin = !status;
      });
  }

  goTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  logout(): void {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
