import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostWatchedComponent } from './most-watched/most-watched.component';
import { RouterModule } from '@angular/router';
import { MostWatchedRoutingModule } from './most-viewed-routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MostWatchedComponent ],
  imports: [
    CommonModule, RouterModule, MostWatchedRoutingModule,
    SharedModule, 
  ],
})
export class MostViewedModule {}
