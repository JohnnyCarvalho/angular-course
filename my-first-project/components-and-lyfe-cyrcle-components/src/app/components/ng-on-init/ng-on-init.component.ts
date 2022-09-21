/**
 * O ngOnInit é um evento do ciclo de vida de um componente que é executado logo após o contrutor,
 * ou seja, ele é o primeiro evento a ser desparado quando solicitado.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.scss']
})
export class NgOnInitComponent implements OnInit {

  public title2: string = 'This is a second title!'

  constructor() { }

  /**
   * Uma vez criado o ngOnInit aqui, basta chamar o sector no app.modules
   * que ele automáticamente vai ser executado, não sendo necessário criar mais um
   * ngOnInit la no app.modules.
   */
  ngOnInit(): void {

    setTimeout( () => {
      console.log('Hello World!');
      
    }, 5000)

  }

}
