/**
 * A vinculação de propriedades em Angular ajuda a definir valores para propriedades de elementos ou diretivas HTML. 
 * Use a associação de propriedade para fazer coisas como a funcionalidade do botão de alternância, definir caminhos 
 * programaticamente e compartilhar valores entre componentes.
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public buttonSoma: boolean = false;
  public buttonSubtrai: boolean = false;
  public numero: number = 0;

  constructor() { }

  public somar = () => {
    this.buttonSoma = true;
    this.numero =+ 1;
    console.log(this.numero);
    
  }

  public diminuir = () => {
    this.buttonSubtrai = true;
    this.numero -= 1;
    console.log(this.numero);
  }

  ngOnInit(): void { }

}
