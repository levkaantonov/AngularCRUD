import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from './data/clients-mock';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DataTableModule } from 'angular2-datatable';
// Сервис доступа к api.
import { DataService } from './services/data.service';

// Корень.
import { AppComponent } from './app.component';

// Модуль роутинга.
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
