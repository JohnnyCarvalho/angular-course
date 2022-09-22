/**
 * A associação bidirecional oferece aos componentes em seu aplicativo uma maneira de compartilhar dados. 
 * Use a associação bidirecional para ouvir eventos e atualizar valores simultaneamente entre componentes pai e filho.
 * Nesse exemplo iremos utilizar o ngModel, ele cria uma FormControlinstância de um modelo de domínio e a 
 * vincula a um elemento de controle de formulário.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public nome: string = 'Johnny';

  constructor() { }

  ngOnInit(): void {
  }

}
