/**
 * O evento ngOnChanges é um evento que é executado sempre que um valor é alterado
 * externamente em um componente, através de um Input por exemplo, aqui iremos ver brevemente
 * que sempre que um componente recebe um dado através do @Input o ngOnChanges é invocado.
 */


import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-chances',
  templateUrl: './ng-on-chances.component.html',
  styleUrls: ['./ng-on-chances.component.scss']
})
export class NgOnChancesComponent implements OnInit, OnChanges {

  @Input() 
  public title3: string = 'This is a third title!'

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void{

    //alert('component successfully changed!')
    console.log('component successfully changed');
    

  }

}
