import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SingleMovieComponent } from "./single-movie/single-movie.component";

export const routes: Routes = [
  {
    path: "",
    component: SingleMovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleMovieRoutingModule {}