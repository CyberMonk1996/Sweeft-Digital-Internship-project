import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MostViewedModule } from "./most-viewed/most-viewed.module";
import { RecentlyUploadedModule } from "./recently-uploaded/recently-uploaded.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    MostViewedModule, 
    RecentlyUploadedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
