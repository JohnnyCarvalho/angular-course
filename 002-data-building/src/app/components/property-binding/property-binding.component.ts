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

  public checkedDisable: boolean = false;
  public imgSrc: string = 'https://img.portalgsti.com.br/9YEHBE1HnJlTShyyT-OmbFHD_7Q=/200x200/https://www.portalgsti.com.br/media/uploads/community/2016/04/25/angularjs.png'

  ngOnInit(): void { }

}
