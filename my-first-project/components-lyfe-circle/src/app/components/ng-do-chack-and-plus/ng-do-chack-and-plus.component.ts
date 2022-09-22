/**
 * Estes eventos se atualizam conforme a página é atualizada.
 * 
 * ngDoCheck(): Chamado imediatamente após ngOnChanges()cada execução de detecção de alterações e 
 * imediatamente após ngOnInit()na primeira execução.
 * 
 *    ngAfterContentInit(): Chamado uma vez após o primeiro ngDoCheck(), responde após o Angular projetar conteúdo externo na exibição do 
 *    componente ou na exibição em que uma diretiva está.
 * 
 *    ngAfterContentChecked(): Chamado após ngAfterContentInit()e a cada subseqüente ngDoCheck().
 *    Responda após o Angular verificar o conteúdo projetado na diretiva ou componente.
 * 
 *    ngAfterViewInit(): Chamado uma vez após o primeiro ngAfterContentChecked().
 *    Responda depois que o Angular inicializar as exibições do componente e as exibições filhas ou a exibição que contém a diretiva.
 * 
 *    ngAfterViewChecked(): Chamado após o ngAfterViewInit()e todos os subseqüentes ngAfterContentChecked().
 *    Responder após o Angular verificar as visualizações do componente e as visualizações filhas ou a visualização que contém a diretiva.
 * 
 * ngOnDestroy(): Chamado imediatamente antes de Angular destruir a diretiva ou componente.
 * Limpeza logo antes de Angular destruir a diretiva ou componente. Cancele a assinatura de Observables 
 * e desvincule manipuladores de eventos para evitar vazamentos de memória.
 */


import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-do-chack-and-plus',
  templateUrl: './ng-do-chack-and-plus.component.html',
  styleUrls: ['./ng-do-chack-and-plus.component.scss']
})

export class NgDoChackAndPlusComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {


  public title4: string = 'This is a fourth title!'

  constructor() { }

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
