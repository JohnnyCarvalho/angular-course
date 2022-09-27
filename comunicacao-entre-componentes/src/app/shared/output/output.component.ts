import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: 'Johnny', idade: 31},
    {nome: 'Bruna', idade: 26},
    {nome: 'Andre', idade: 29},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    console.log(this.list[event]);
    
    this.enviarDados.emit(this.list[event]);
  }
}
