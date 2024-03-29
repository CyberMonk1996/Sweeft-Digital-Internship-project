import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'movie/:id',
    title: 'Movie Details',
    loadChildren: () =>
      import('./single-movie/single-movie.module').then(
        (mod) => mod.SingleMovieModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
