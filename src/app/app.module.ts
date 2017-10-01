import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {appRouting} from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    appRouting.components
  ],
  imports: [
    BrowserModule,
    appRouting.routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
