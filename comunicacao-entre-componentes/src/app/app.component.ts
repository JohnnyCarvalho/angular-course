import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input [contador]="numero"></app-input>
<button (click)="insert()">Insert</button>
  <router-outlet></router-outlet>`
})

export class AppComponent {
  public numero: number = 0;
  public destroi: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public insert = () => {
    this.numero += 1;
  }

  public destruir = () => {
    this.destroi = false;
  }
}
