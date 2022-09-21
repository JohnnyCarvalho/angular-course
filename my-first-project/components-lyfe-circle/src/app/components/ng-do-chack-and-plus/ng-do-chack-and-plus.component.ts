/**
 * Estes eventos se atualizam conforme a página é atualizada.
 */


import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-do-chack-and-plus',
  templateUrl: './ng-do-chack-and-plus.component.html',
  styleUrls: ['./ng-do-chack-and-plus.component.scss']
})

export class NgDoChackAndPlusComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {


  public title4: string = 'This is a fourth title!'

  constructor() { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    console.log('ngDoCheck!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked!');
  }

}
