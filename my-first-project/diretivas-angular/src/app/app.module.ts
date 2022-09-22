/**
 * As diretivas são classes que adicionam comportamento adicional aos elementos em seus aplicativos.
 * Com as diretivas integradas do angulas, nós podemos gereciar listas, estilos e demais coisas que os usuários veêm.
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }