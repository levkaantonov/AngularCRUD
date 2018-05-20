import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-new',
  templateUrl: './incident-new.component.html',
  styleUrls: ['./incident-new.component.css']
})
export class IncidentNewComponent implements OnInit {
  
  // Индекс клиента.
  private idOfClient: number;
  
  private subscription: Subscription;
  constructor(private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.subscription = this.activeRoute.params.subscribe(
    (params: Params) => {
      this.idOfClient = params['idOfClient'];
      }
    );
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
