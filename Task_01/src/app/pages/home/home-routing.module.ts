import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostWatchedComponent } from './most-viewed/most-viewed.component';
import { RecentlyAddedComponent } from "./recently-uploaded/recently-uploaded.component";

export const routes: Routes = [
  {
    path: 'most-watched',
    component: MostWatchedComponent,
  },
  {
    path: 'recently-uploaded',
    component: RecentlyAddedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
