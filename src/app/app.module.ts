import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FcmService } from './fcm.service';

var config = {
  apiKey: "AIzaSyD0IAMloe86vH2vV0jjEZPWYPeQmmkEQRc",
  authDomain: "ebayapp-73969.firebaseapp.com",
  databaseURL: "https://ebayapp-73969.firebaseio.com",
  projectId: "ebayapp-73969",
  storageBucket: "ebayapp-73969.appspot.com",
  messagingSenderId: "568509866325"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
