import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostWatchedComponent } from './most-viewed/most-watched/most-watched.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { RecentlyAddedComponent } from './recently-uploaded/recently-added/recently-added.component';

@NgModule({
  declarations: [
    AppComponent,
    MostWatchedComponent,
    ReleaseDateComponent,
    RecentlyAddedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
