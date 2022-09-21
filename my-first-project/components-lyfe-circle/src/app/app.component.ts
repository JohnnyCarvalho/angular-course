import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title></app-title>
  <app-ng-on-init></app-ng-on-init>
  <app-ng-on-chances title3="New title input!"></app-ng-on-chances>
  <app-ng-do-chack-and-plus></app-ng-do-chack-and-plus>

  <router-outlet></router-outlet>`
  
})
export class AppComponent {

  constructor() { }


}