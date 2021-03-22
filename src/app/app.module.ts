import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDC2DoeIhoyH4INV6OtZ-iZBMf98B6IqhE',
      libraries:['places']
    }),
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
