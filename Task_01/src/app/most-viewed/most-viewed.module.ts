import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostWatchedComponent } from './most-watched/most-watched.component';
import { RouterModule } from '@angular/router';
import { MostWatchedRoutingModule } from './most-viewed-routing.module';

@NgModule({
  declarations: [MostWatchedComponent],
  imports: [CommonModule, RouterModule, MostWatchedRoutingModule],
})
export class MostViewedModule {}
