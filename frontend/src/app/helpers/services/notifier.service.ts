import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private readonly notifier: MatSnackBar) {}

  message(messageToShow: string): void {
    this.notifier.open(messageToShow, null, {
      duration: environment.notifier.time,
    });
  }
}
