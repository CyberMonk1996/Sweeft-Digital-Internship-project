import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private movServ: MoviesService) {}
  ngOnInit() {}

  fetch() {
    this.movServ.getPopularMovies(4);
    console.log(this.movServ.movies);
  }
}
