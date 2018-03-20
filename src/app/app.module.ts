import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddUserPage } from '../pages/add-user/add-user';
import { UserService } from '../services/user/user.service';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { ToastService } from '../services/toast/toast.service';
import { DeleteUserPage } from '../pages/delete-user/delete-user';
import { AddTeamPage } from '../pages/add-team/add-team';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditUserPage,
    AddUserPage,
    DeleteUserPage,
    AddTeamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditUserPage,
    AddUserPage,
    DeleteUserPage,
    AddTeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    ToastService
  ]
})
export class AppModule {}
