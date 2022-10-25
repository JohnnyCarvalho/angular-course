import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PainelComponent } from './components/painel/painel.component';
import { HeaderComponent } from './components/painel/header/header.component';
import { BaseboardComponent } from './components/painel/baseboard/baseboard.component';

@NgModule({
  declarations: [AppComponent, PainelComponent, HeaderComponent, BaseboardComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
