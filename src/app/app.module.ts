import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { DownloadComponent } from './downloadpage/download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadpageComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
