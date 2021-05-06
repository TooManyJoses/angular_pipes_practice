import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MilesToKMConvertPipe } from './miles-to-kmconvert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MilesToKMConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
