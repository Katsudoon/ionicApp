import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CvPage } from '../pages/cv/cv';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { WeatherProvider } from '../providers/weather/weather';
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from '../pages/tabs/tabs';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { APIPage } from '../pages/API/API';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LinkedinPage } from '../pages/linkedin/linkedin';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { EmailComposer } from '@ionic-native/email-composer';
import { MapPage } from '../pages/map/map';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CvPage,
    APIPage,
    PortfolioPage,
    TabsPage,
    LinkedinPage,
    MapPage
    
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CvPage,
    APIPage,
    PortfolioPage,
    TabsPage,
    LinkedinPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    WeatherProvider,
    DocumentViewer,
    SocialSharing,
    SafariViewController,
    EmailComposer,
    Geolocation
  ]
})
export class AppModule {}
