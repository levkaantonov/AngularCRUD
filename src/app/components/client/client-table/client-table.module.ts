import { NgModule }      from '@angular/core';
import { DataTableModule } from "angular2-datatable";

import { ClientTableComponent } from './client-table.component';

@NgModule({
  imports:[ 
  DataTableModule, 
  ],
  declarations: [ ClientTableComponent],
  exports: [ClientTableComponent]
})
export class ClientTableModule { }
