import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/diretivas-estruturais/ng-if/ng-if.component';
import { NgForComponent } from './components/diretivas-estruturais/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/diretivas-estruturais/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/diretivas-de-atributos/ng-class/ng-class.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent
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
