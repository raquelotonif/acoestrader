import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';

import {FirebaseConfig} from './../environments/firebase.config';


import {appRouting} from './app.routing';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        appRouting.components
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        appRouting.routes,
        AngularFireModule.initializeApp(FirebaseConfig)
    ],
    providers: [AngularFireDatabase],
    bootstrap: [AppComponent]
})
export class AppModule {
}
