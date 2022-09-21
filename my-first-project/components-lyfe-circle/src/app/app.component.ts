import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title></app-title>
  <app-ng-on-init></app-ng-on-init>
  <app-ng-on-chances title3="New title input!"></app-ng-on-chances>
  <router-outlet></router-outlet>`
  
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {


  public valor: number = 1;

  constructor() { }

  public adicionar(): number {
    return this.valor += 1;
  }

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