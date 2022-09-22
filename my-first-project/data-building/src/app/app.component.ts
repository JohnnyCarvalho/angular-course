import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-interpolation></app-interpolation>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-building';
}
