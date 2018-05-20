import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { DataService } from 'app/services/data.service';

import { Client } from 'app/models/client';
import { Incident } from 'app/models/incident';

@Component({
  selector: 'app-incident-table',
  templateUrl: './incident-table.component.html',
  styleUrls: ['./incident-table.component.css']
})
export class IncidentTableComponent implements OnInit {
  // Отдельный инцидент.
  @Input() indexOfClient: number;
  
  // Это возможный клиент.
  @Input() isPossibleCustomer: boolean = false;
  
  // Контейнер инцидентов.
  incidents: Incident[] = [];
  
  // Размер страницы.
  rowsOnPage = 3;
  
  // Конструктор.
  constructor(private router: Router,
              private dataService: DataService) { }
  
  ngOnInit() {
    this.indexOfClient
    ? this.getIncidents(this.indexOfClient)
    : {};
  }
  
  // Получить инциденты пользователя.
  private getIncidents(id: number) {
    this.dataService.getIncidents(id)
                    .then(incidents => this.incidents = incidents);
  }
  
  // Удалить инцидент.
  private onClear(id: number) {
    this.dataService.deleteIncident(id);
    this.getIncidents(this.indexOfClient);
  }
  
  // Добавить инцидент.
  private addIncident() {
    this.router.navigate([`clients/${this.indexOfClient}/update-client/new-incident`]);
  }
  
  //Перейти на форму апдейта инцидента.
  private onEdit(id: number) {
    this.router.navigate([`clients/${this.indexOfClient}/update-client/${id}/update-incident`]);
  }
}

