import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../../models/movies.model";
import { MoviesService } from "../../services/movies-service.service";

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  @Input() data!: Movie;
  constructor(
    public movService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.movService.getSingleMovie(985939);
  }

}
