/**
 * A associação de eventos permite ouvir e responder às ações do usuário, 
 * como pressionamentos de tecla, movimentos do mouse, cliques e toques.
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public buttonSoma: boolean = false;
  public buttonSubtrai: boolean = false;
  public buttonDisable: boolean = true;
  public numero: number = 0;
  public position: {x: number, y: number} = {x: 0, y: 0};

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

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
    

  }

  ngOnInit(): void {
  }

}
