import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-sub-modules-component></app-sub-modules-component>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'modules-angular';
}
