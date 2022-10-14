//teste commit

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.css']
})
export class ToDoInputAddItensComponent implements OnInit {

  @Output()
  public emmitItemTaskList = new EventEmitter();

  public addItemTaskList!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public submmuiTaskList() {
    console.log(this.addItemTaskList);

    //Limpa o campo de digitação após o envio do dado digitado
    if (this.addItemTaskList) {
      this.addItemTaskList = ''
    }
  }
}
