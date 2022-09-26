import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  public nome: string = '';
  public list: Array<{nome: string}> = [];
  public message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public insert = () => {

     if (this.nome != '') {
      this.list.push({ nome: this.nome });
      this.nome = '';

     }
     else {
      this.message = 'Error!';
     }
  }

  public delete = (event: number) => {
    this.list.splice(event, 1);
  }
}
