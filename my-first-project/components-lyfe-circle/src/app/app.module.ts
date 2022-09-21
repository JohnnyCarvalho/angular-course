import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { NgOnInitComponent } from './components/ng-on-init/ng-on-init.component';
import { NgOnChancesComponent } from './components/ng-on-chances/ng-on-chances.component';
import { NgDoChackAndPlusComponent } from './components/ng-do-chack-and-plus/ng-do-chack-and-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NgOnInitComponent,
    NgOnChancesComponent,
    NgDoChackAndPlusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
