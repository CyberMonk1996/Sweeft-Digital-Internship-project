import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'most-watched',
    loadChildren: () =>
      import('./most-viewed/most-viewed.module').then(
        (mod) => mod.MostViewedModule
      ),
  },
  {
    path: 'recently-uploaded',
    loadChildren: () =>
      import('./recently-uploaded/recently-uploaded.module').then(
        (mod) => mod.RecentlyUploadedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
