import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Y2mHomeComponent} from './y2m-home/y2m-home.component';
import {NavbarComponent} from "./y2m-home/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    Y2mHomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
