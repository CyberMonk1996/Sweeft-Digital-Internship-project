import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from './services/movies-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Task_01';

  constructor(private movServ: MoviesServiceService) {}
  ngOnInit() {}

  fetch() {
    this.movServ.storeMovies();
  }
}
