import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms';
import {JsonpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseConfig} from './../environments/firebase.config';
import {FirebaseTesteConfig} from './../environments/firebase-teste.config';

import {appRouting} from './app.routing';
import {AppComponent} from './app.component';
import {CoreModule} from '../core/core.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    appRouting.components
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    CoreModule,
    appRouting.routes,
    AngularFireModule.initializeApp(FirebaseConfig),
    // AngularFireModule.initializeApp(FirebaseTesteConfig)
  ],
  providers: [
    Title,
    AngularFireDatabase,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
