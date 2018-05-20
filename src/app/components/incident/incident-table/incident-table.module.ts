import { NgModule }      from '@angular/core';
import { DataTableModule } from "angular2-datatable";

import { IncidentTableComponent } from './incident-table.component';

@NgModule({
  imports:[ 
  DataTableModule, 
  ],
  declarations: [ IncidentTableComponent],
  exports: [IncidentTableComponent]
})
export class IncidentTableModule { }
