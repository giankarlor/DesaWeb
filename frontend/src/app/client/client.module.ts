import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { FormClientComponent } from './pages/form-client/form-client.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListInvoicesComponent } from './pages/list-invoices/list-invoices.component';

@NgModule({
  declarations: [ListClientComponent, FormClientComponent, ListInvoicesComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ClientModule {}
