import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

import { Incident } from 'app/models/incident';
import { Client } from "app/models/client";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    private clientUrl: string = 'api/clients';
    private incidentUrl: string = 'api/incidents';
    // Заголовки.
    private headers = new Headers({ 'Content-Type' : 'application/json' });
    
    // Конструктор.
    constructor(private http: Http){}
    
    // Получить клиентов.
    getClients(): Promise<Client[]> {
        return this.http.get(this.clientUrl)
                        .toPromise()
                        .then(response  => response.json().data as Client[])
                        .catch(this.handleError);
    }
    
    // Получить клиента
    getClient(id: number): Promise<Client> {
        const url = `${this.clientUrl}/${id}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Client)
                        .catch(this.handleError);
    }
    
    // Создать клиента.
    createClient(client: Client): Promise<Client> {
        return this.http.post(this.clientUrl, JSON.stringify(client), {headers: this.headers})
                        .toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
    }
    
    // Удалить клиента.
    deleteClient(id:number): Promise<void>{
        const url = `${this.clientUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
                        .toPromise()
                        .then(() => {})
                        .catch(this.handleError);
    }
    
    // Обновление инфы о клиенте.
    updateClient(client: Client): Promise<Client> {
        let url = `${this.clientUrl}/${client.id}`;
        return this.http.put(url, JSON.stringify(client))
                        .toPromise()
                        .then(() => client)
                        .catch(this.handleError);
    }
    
    // Получить инциденты клиента.
    getIncidents(id: number): Promise<Incident[]> {
        return this.http.get(this.incidentUrl)
                        .toPromise()
                        .then(response  => response.json().data as Incident[])
                        .then(incidents => incidents.filter(incident => incident.clientId == id));
    }
    
    // Получить инцидент.
    getIncident(id: number): Promise<Incident> {
        const url = `${this.incidentUrl}/${id}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Incident)
                        .catch(this.handleError);
    }

    // Создать инцидент.
    createIncident(incident: Incident): Promise<Incident> {
        return this.http.post(this.incidentUrl, JSON.stringify(incident), {headers: this.headers})
                        .toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
    }

    // Удалить инцидент.
    deleteIncident(id:number): Promise<void>{
        const url = `${this.incidentUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
                        .toPromise()
                        .then(() => {})
                        .catch(this.handleError);
    }

    // Обновление инфы об инциденте.
    updateIncident(incident: Incident): Promise<Incident> {
        let url = `${this.incidentUrl}/${incident.id}`;
        return this.http.put(url, JSON.stringify(incident))
                        .toPromise()
                        .then(() => incident)
                        .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('Ошибка:', error);
        return Promise.reject(error.messsage || error);
    }
    
}