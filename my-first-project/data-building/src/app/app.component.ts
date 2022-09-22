import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-interpolation></app-interpolation>
  <app-property-binding></app-property-binding>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'data-building';
}
