/**
 * O data binding nada mais é do que uma forma de exibir dados em um componente HTML, ou 
 * trabalhar, manipular dados em um componente HTML.
 * Desta forma temos então o:
 * 
 * - Interpolatiion: Permite que você incorpore valores dinâmicos dentro de seu modelo HTML ex: 
 *    componente TS -> public nome: string = 'Johnny';
 *    componente HTML -> <h1> {{ nome }} </h1> - Interpolation
 * 
 * - Property Binding: ajuda a definir valores para propriedades de elementos ou diretivas HTML
 *    componente TS -> public img: string = './imagem.jpj';
 *    componente HTML -> <img [src]="img">, outro exemplo, <button [disabled]=""disabeButton>Button</button>
 *    oque define um elemento property Binding é o uso de colchetes [] conforme exemplos acima.
 * 
 * - Event Binding: é a associação de eventos que permite você escutar e responder as ações do usuário
 *   como precionamento de tecla, movimentos do mouse, cliques e toques.
 *    componente HTML -> <button (Click)=""calc>Button</button>
 *    oque define um elemento property Binding é o uso de chaves () conforme exemplos acima.
 * 
 * - Two Way Bonding: é a união do Property Binding com o Event Binding, usado para ouvir eventos e 
 *   atualizar valores simultaneamente entre componentes pai e filho
 *    componente TS:
 *      public nome: string = 'Johnny';
 *    componente HTML:
 *      <input [(ngModel)]="nome" -> toda vez que o input for modificado, a variável vai receber o novo valor digitado pelo usuário.
 *      <span> {{ nome }} </span>
 * 
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-interpolation></app-interpolation>
  <app-property-binding></app-property-binding>
  <app-event-binding></app-event-binding>
  <app-two-way-binding></app-two-way-binding>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'data-building';
}
