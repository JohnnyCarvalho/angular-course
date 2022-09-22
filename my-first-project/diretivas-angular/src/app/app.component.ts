import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-ng-if></app-ng-if>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'diretivas-angular';
}
