/**
 * Este evento avisa quando um componente é destrído, na verdade ele verifica se foi destrído, más
 * neste caso ele vai avisar por que colocamos um console.log para isso.
 */


import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-detroy',
  templateUrl: './ng-detroy.component.html',
  styleUrls: ['./ng-detroy.component.scss']
})
export class NgDetroyComponent implements OnInit, OnDestroy{

  public title5: string = 'This is a five title!'

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Componente destruído!');
    
  }

}
