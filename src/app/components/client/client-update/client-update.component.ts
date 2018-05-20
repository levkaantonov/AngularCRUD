import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  
  // Индекс клиента.
  index: number;
  
  // Это возможный клиент.
  isPossibleCustomer: boolean = true;
  
  private subscription: Subscription;
  constructor(private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.subscription = this.activeRoute.params.subscribe(
    (params: Params) => {
      this.index = params['id'];
    }
    );
  }
  
  private setDisabled($event): boolean{
    this.isPossibleCustomer = !this.isPossibleCustomer;
    return
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
