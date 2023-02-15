import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { DownloadComponent } from './downloadpage/download/download.component';
import { NavbarComponent } from './downloadpage/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadpageComponent,
    DownloadComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
