import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Компоненты.
import { ClientTableComponent } from './components/client/client-table/client-table.component';
import { ClientNewComponent } from './components/client/client-new/client-new.component';
import { ClientFormComponent } from "app/components/client/forms/client-form/client-form.component";
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { IncidentTableComponent } from './components/incident/incident-table/incident-table.component';
import { IncidentFormComponent } from './components/incident/forms/incident-form/incident-form.component';
import { IncidentNewComponent } from './components/incident/incident-new/incident-new.component';
import { IncidentUpdateComponent } from './components/incident/incident-update/incident-update.component';

// Определение маршрутов.
const appRoutes: Routes = [
    { path: '', redirectTo: "/clients", pathMatch: 'full' },
    { path: 'clients', component: ClientTableComponent },
    { path: 'clients/new-client', component: ClientNewComponent },
    { path: 'clients/:id/update-client', component: ClientUpdateComponent },
    { path: 'clients/:idOfClient/update-client', children: [
        { path: 'new-incident', component: IncidentNewComponent },
        { path: ':id/update-incident', component: IncidentUpdateComponent }
    ] },
    { path: '**', redirectTo: "/clients", pathMatch: 'full' }
];

@NgModule(
{
    imports: [
    RouterModule.forRoot(appRoutes)
    ],
    exports: [
    RouterModule
    ]
}
)

export class AppRoutingModule {}
export const routingComponents = [
    ClientTableComponent, 
    ClientNewComponent, 
    ClientUpdateComponent, 
    ClientFormComponent,
    IncidentTableComponent,
    IncidentFormComponent,
    IncidentNewComponent,
    IncidentUpdateComponent
]