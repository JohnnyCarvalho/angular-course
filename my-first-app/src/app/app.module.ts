import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MySecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
