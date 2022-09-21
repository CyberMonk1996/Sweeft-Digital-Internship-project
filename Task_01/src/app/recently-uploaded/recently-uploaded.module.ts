import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyAddedComponent } from "./recently-added/recently-added.component";
import { RouterModule } from '@angular/router';
import { RecentlyAddedRoutingModule } from "./recently-added-routing.module";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ RecentlyAddedComponent ],
  imports: [
    CommonModule, RouterModule, RecentlyAddedRoutingModule, SharedModule
  ]
})
export class RecentlyUploadedModule { }




