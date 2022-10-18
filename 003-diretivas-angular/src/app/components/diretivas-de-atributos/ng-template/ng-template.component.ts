import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  public list: Array<{nome: string}> = [
    {nome: 'Johnny'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
