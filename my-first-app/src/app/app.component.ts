import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-my-first-component></app-my-first-component>
  <app-my-second-component></app-my-second-component>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'my-first-app';
}
