import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyAddedComponent } from "./recently-added/recently-added.component";
import { RouterModule } from '@angular/router';
import { RecentlyAddedRoutingModule } from "./recently-added-routing.module";


@NgModule({
  declarations: [ RecentlyAddedComponent ],
  imports: [
    CommonModule, RouterModule, RecentlyAddedRoutingModule
  ]
})
export class RecentlyUploadedModule { }




