import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from 'app/services/data.service';

import { Client } from 'app/models/client';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {
  // Контейнер клиентов.
  clients: Client[] = [];
  // Размер страницы.
  rowsOnPage = 10;

  constructor(private router: Router,
              private dataSerivice: DataService) { }

  ngOnInit() {
    this.getClients();
  }

  // Получить клиентов.
  private getClients() {
    this.dataSerivice.getClients()
    .then(clients => this.clients = clients);
  }

  // Переход на форму добавления нового клиента.
  addClient() {
    this.router.navigate(['clients/new-client']);
  }

  // Переход на форму апдейта клиента.
  onEdit(id: number){
    this.router.navigate([`clients/${id}/update-client`]);
  }

  // Удаление клиента.
  onClear(id: number){
    this.dataSerivice.deleteClient(id);
    this.dataSerivice.getClients().then((clients) => {
      this.clients = clients;
    });
  }
}
