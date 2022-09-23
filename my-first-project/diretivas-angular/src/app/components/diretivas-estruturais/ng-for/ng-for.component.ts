import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public list: Array<{nome: string, idade: number}> = [
    {nome: 'Johnny', idade: 32},
    {nome: 'Bruna', idade: 26},
    {nome: 'Wesley', idade: 28},
    {nome: 'Welington', idade: 28},
    {nome: 'Rose', idade: 52},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public addPessoa = () => {
    this.list.push({nome: 'Pedro', idade: 20});
  }

  public deleteUser = (event: number) => {
    this.list.splice(event, 1);
  }

}
