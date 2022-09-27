import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input [contador]="numero"></app-input>
  <button (click)="insert()">Insert</button>
  <hr>

  <ng-template [ngIf]="getDados">
    <h1>{{ getDados.nome }}</h1>
    <h2>{{ getDados.idade }}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <router-outlet></router-outlet>`
})

export class AppComponent {
  public numero: number = 0;
  public destroi: boolean = true;

  public getDados: {nome: string, idade: number} | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public insert = () => {
    this.numero += 1;
  }

  public destruir = () => {
    this.destroi = false;
  }

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
  }
}
