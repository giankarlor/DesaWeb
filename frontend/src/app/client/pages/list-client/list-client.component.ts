import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/entities/client.entity';
import { ClientService } from 'src/app/services/client.service';
import { FormClientComponent } from '../form-client/form-client.component';
import { ListInvoicesComponent } from '../list-invoices/list-invoices.component';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit {
  metaColumns = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
    { field: 'nit', title: 'Nit' },
  ];

  list = [];

  constructor(
    private readonly client: ClientService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.list = this.client.getAll();
  }

  openForm(client: Client = null): void {
    const ref: MatDialogRef<FormClientComponent> = this.dialog.open(
      FormClientComponent,
      {
        width: '400px',
        data: client,
        disableClose: true,
      }
    );

    ref.afterClosed().subscribe((result: any) => {
      if (!result) {
        return false;
      }

      if (result.id) {
        this.client.update(result);
      } else {
        this.client.insert(result);
      }
      this.getData();
    });
  }

  viewInvoice(evt, client: Client): void {
    evt.stopPropagation();

    const ref: MatDialogRef<ListInvoicesComponent> = this.dialog.open(
      ListInvoicesComponent,
      {
        width: '1200px',
        minHeight: '70vh',
        data: client,
        disableClose: true,
      }
    );
  }
}
