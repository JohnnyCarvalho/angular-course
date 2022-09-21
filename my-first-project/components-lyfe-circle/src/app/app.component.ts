import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title></app-title>
  <app-ng-on-init ></app-ng-on-init>
  <app-ng-on-chances title3="New title input!" ></app-ng-on-chances>
  <app-ng-do-chack-and-plus></app-ng-do-chack-and-plus>
  <app-ng-detroy  *ngIf="destruir"></app-ng-detroy>
  <button (click)="destruirComponente()">Destruir Componente!</button>
  <router-outlet></router-outlet>`
  
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }


  public destruirComponente() {
    this.destruir = false;
  }

}