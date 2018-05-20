import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

// Сервис для получения данных.
import { DataService } from 'app/services/data.service';
// Модель инцидентов.
import { Incident } from 'app/models/incident';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {
  /* Свойства */
  // Индекс иннцидента.
  @Input() idOfIncident: number;
  // Индекс клиента
  @Input() idOfClient: number;
  // Клиент.
  private incident: Incident = {
    id: null,
    clientId: null,
    theme: null,
    text: null,
    date: new Date(Date.now())
  };  
  // Форма.
  private incidentForm: FormGroup;
  
  // Конструктор.
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private location: Location) {
                this.createForm();
              }
  
  /* Методы. */
  
  // При инициализации.
  ngOnInit() {
    this.idOfIncident
    ? this.getIncident(this.idOfIncident)
    : {};
  }
  
  // Создать форму.
  private createForm() { 
    this.incidentForm = this.formBuilder.group({
      theme: [null, Validators.required],
      text: [null, Validators.required],
      date: [null,Validators.required]
    });
  }
  
  // Запросить объект инцидент и при получении обновить форму.
  private getIncident(id: number) {
    this.dataService.getIncident(id).then((incident) => {
      this.incident = incident;
      this.updateForm();
    });
  }
  
  // Обновление формы.
  private updateForm(){
    this.incidentForm.controls['theme'].setValue(this.incident.theme);
    this.incidentForm.controls['text'].setValue(this.incident.text);
  }
  
  // Cоздать объект инцидент.
  private createIncident() {
    let form = this.incidentForm;
    this.incident = {
      id: this.incident.id ? this.incident.id : null,
      clientId: this.idOfClient,
      theme: form.controls['theme'].value,
      text: form.controls['text'].value,
      date: form.controls['date'].value
    };
  }
  
  // Отправить объект инцидент на сервер.
  // Если id передан зачит инцидент обновить,
  // если нет, то создать.
  submitIncident() {
    this.createIncident();
    this.idOfIncident
    ? this.dataService.updateIncident(this.incident)
    : this.dataService.createIncident(this.incident);
    this.onBack();
  }
  
  // Назад.
  private onBack() {
    this.location.back();
  }
  
}
