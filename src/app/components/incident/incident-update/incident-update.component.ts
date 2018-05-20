import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-update',
  templateUrl: './incident-update.component.html',
  styleUrls: ['./incident-update.component.css']
})
export class IncidentUpdateComponent implements OnInit {
  // Индекс инцидента.
  private idOfIncident: number;
  // Индекс клиента.
  private idOfClient: number;
  
  private subscription: Subscription;
  constructor(private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.subscription = this.activeRoute.params.subscribe(
    (params: Params) => {
      this.idOfIncident = params['id'];
      this.idOfClient = params['idOfClient'];
    }
    );
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
