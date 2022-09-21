import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SharedModule } from "../shared/shared.module";
import { SingleMovieRoutingModule } from "./single-movie-routing.module";


@NgModule({
  declarations: [
    SingleMovieComponent
  ],
  imports: [
    CommonModule, SharedModule, SingleMovieRoutingModule
  ]
})
export class SingleMovieModule { }
