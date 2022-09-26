import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/diretivas-estruturais/ng-if/ng-if.component';
import { NgForComponent } from './components/diretivas-estruturais/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/diretivas-estruturais/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/diretivas-de-atributos/ng-class/ng-class.component';
import { NgStyleComponent } from './components/diretivas-de-atributos/ng-style/ng-style.component';
import { NgModelComponent } from './components/diretivas-de-atributos/ng-model/ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
