import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { MostWatchedComponent } from './most-viewed/most-viewed.component';
import { RecentlyAddedComponent } from "./recently-uploaded/recently-uploaded.component";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    MostWatchedComponent,
    RecentlyAddedComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule, RouterModule, HomeRoutingModule,
    SharedModule, 
  ]
})
export class HomeModule { }
