import { Injectable } from '@angular/core';
import mockInvoices from '../mocks/invoices.json';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  private list = [...mockInvoices];

  constructor() {}

  getInvoices(clientId: number): any {
    return this.list.filter((it) => it.clientId === clientId);
  }
}
