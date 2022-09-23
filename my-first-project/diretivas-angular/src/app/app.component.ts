/**
 * As diretivas são classes que adicionam comportamento adicional aos elementos em seus aplicativos.
 * Com as diretivas integradas do angular, nós podemos gereciar listas, estilos e demais coisas que os usuários veêm.
 * 
 * As diretivas são separadas em duas forma
 * 
 *  * Diretivas de atributo: são as que alteram a aprência ou comportamento de um elemento, componente ou outra diretiva, exemplos:
 *    - NgClass: adiciona e remove um conjunto de classes CSS
 *    - NgStyle: adiciona e remove um conjunto de estilos HTML
 *    - NgModel: adiciona vinculação de dados bidirecional a um elemento de formulário HTML
 * 
 *  * Diretivas estruturais: elas moldam ou remodelam a estrutura do DOM, adicionando, removendo e manipulando
 *    os elementos do host aos quais estão anexados, exemplos:
 *    - *NgIf: condicionalmente cria, ou descarta visualizações do modelo.
 *    - *NfFor: repete um nó para cada item de uma lista.
 *    - *NgSwitch: um conjunto de diretivas que alteram entre visões alternativas.
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-ng-if></app-ng-if>
  <app-ng-for></app-ng-for>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'diretivas-angular';
}
