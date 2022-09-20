import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';

export const routes: Routes = [
  {
    path: '',
    component: RecentlyAddedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentlyAddedRoutingModule {}
