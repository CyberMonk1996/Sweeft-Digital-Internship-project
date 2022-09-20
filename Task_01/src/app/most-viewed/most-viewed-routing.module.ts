import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostWatchedComponent } from './most-watched/most-watched.component';

export const routes: Routes = [
  {
    path: '',
    component: MostWatchedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostWatchedRoutingModule {}
