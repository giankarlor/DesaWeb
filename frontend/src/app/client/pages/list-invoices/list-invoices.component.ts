import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InvoicesService } from '../../../services/invoices.service';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css'],
})
export class ListInvoicesComponent implements OnInit {
  list: any[];
  listDetails: any[];

  metaColumns = [
    { field: 'clientId', title: 'ID' },
    { field: 'createdBy', title: 'Creada' },
  ];

  metaColumnsDetails = [
    { field: 'productName', title: 'Producto' },
    { field: 'quantity', title: 'Cantidad' },
    { field: 'subTotal', title: 'SubTotal' },
  ];

  constructor(
    private readonly invoices: InvoicesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reference: MatDialogRef<ListInvoicesComponent>
  ) {}

  ngOnInit(): void {
    this.list = this.invoices.getInvoices(this.data.id);
  }

  showDetails(data): void {
    this.listDetails = data.details;
  }
}
