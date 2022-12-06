import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UseApiRequests } from '../services/freeapiservices';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UseApiRequests],
  bootstrap: [AppComponent]
})
export class AppModule { }
