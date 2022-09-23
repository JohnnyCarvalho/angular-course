/**
 * Interpolation nada mais é do que informar dados no html, ou seja, inserir lógica
 * dentro do html através das chaves, por exemplo {{ nome }}, aqui no arquivo .ts a gente cria 
 * um método nome public, e depois podemos inserir ele em nosso component.html através das chaves
 * mencionadas acima.
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public nome: string = 'Johnny';
  public idade: number = 31;
  public number: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
