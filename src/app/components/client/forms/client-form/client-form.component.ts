import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { NGValidators } from 'ng-validators';

import { Client } from 'app/models/client';

// Сервис для получения данных.
import { DataService } from 'app/services/data.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})

export class ClientFormComponent implements OnInit {
  /* Cвойства*/
  
  // Отдельный клиент.
  @Input() indexOfClient: number;
  // Событие возникающее если тип клиента == возможный клиент.
  @Output() isPossibleCustomer = new EventEmitter();  
  // Тип клиента: возможный клиент.
  typePossibleClient: string = 'Возможный клиент' ;
  // Клиент.
  private client: Client = {
    id: null,
    fullName: null,
    passportId: null,
    mail: null,
    phoneNumber: null,
    type: null
  };  
  // Форма.
  private clientForm: FormGroup;
  
  // Конструктор.
  // Создается форма.
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataService: DataService) {
                this.createForm();
              }
  
  /* Методы */
  
  // При инициализации.
  // Проверяется передан ли id клиента,
  // если да то объект запрашивается с сервера.
  ngOnInit() {
    this.indexOfClient
    ? this.getClient(this.indexOfClient)
    : {};
  }
  
  // Создать форму.
  private createForm() { 
    this.clientForm = this.formBuilder.group({
      fullName: [null, 
      [Validators.required, 
      Validators.pattern("^[а-яёЁА-Я-a-zA-Z ]+$"),
      Validators.maxLength(100)]],
      passportId: [null, 
      [Validators.required, 
      Validators.pattern("^[0-9]{2}№[0-9]{8}$")]],
      mail: [null, 
      [Validators.required, 
      NGValidators.isEmail(),
      Validators.maxLength(40)]],
      phoneNumber: [null, 
      [Validators.required, 
      Validators.pattern("^[0-9]{1} [0-9]{3} [0-9]{7}$")]],
      typeClient: [null, 
      [Validators.required]]
    });
  }
  
  
  // Запросить клиента и при получении обновить форму.
  // Если тип клиента == "Возможный кдиент" то сгенерировать событие об этом.
  private getClient(id: number) {
    this.dataService.getClient(id).then((client) => {
      this.client = client;
      client.type == this.typePossibleClient
      ? {}
      : this.isPossibleCustomer.emit();
      this.updateForm();
    });
  }
  
  // Обновление формы.
  private updateForm(){
    this.clientForm.controls['fullName'].setValue(this.client.fullName);
    this.clientForm.controls['passportId'].setValue(this.client.passportId);
    this.clientForm.controls['mail'].setValue(this.client.mail);
    this.clientForm.controls['phoneNumber'].setValue(this.client.phoneNumber);
    this.clientForm.controls['typeClient'].setValue(this.client.type);
  }
  
  
  // Cоздать объект клиента.
  private createClient() {
    let form = this.clientForm;
    this.client = {
      id: this.client.id ? this.client.id : null,
      fullName: form.controls['fullName'].value,
      passportId: form.controls['passportId'].value,
      mail: form.controls['mail'].value,
      phoneNumber: form.controls['phoneNumber'].value,
      type: form.controls['typeClient'].value
    };
  }
  
  // Отправить клиента на сервер.
  // Если id передан зачит клиента обновить,
  // если нет, то создать.
  submitClient() {
    this.createClient();
    this.indexOfClient
    ? this.dataService.updateClient(this.client)
    : this.dataService.createClient(this.client);
    this.onBack();
  }
  
  // Возврат к таблице клиентов.
  private onBack() {
    this.router.navigate(['clients']);
  }
}
