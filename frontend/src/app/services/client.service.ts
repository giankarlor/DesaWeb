import { Injectable } from '@angular/core';
import { Client } from '../entities/client.entity';
import mockClients from '../mocks/clients.json';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private list: Client[] = [...mockClients];
  constructor() {}

  getAll(): Client[] {
    const clients = [...this.list];
    return clients;
  }

  update(client: Client): void {
    const position = this.list.findIndex((el) => el.id === client.id);
    this.list[position].name = client.name;
    this.list[position].lastname = client.lastname;
  }

  insert(client: Client): void {
    let maxId = 0;
    if (this.list.length > 0) {
      maxId = [...this.list].sort((a, b) => (a.id < b.id ? 1 : -1))[0].id;
    }

    client.id = maxId + 1;
    this.list.push(client);
  }
}
