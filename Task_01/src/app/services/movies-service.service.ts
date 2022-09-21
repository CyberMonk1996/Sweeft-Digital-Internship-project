import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, data } from '../models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  movies!: Movie[];
  singleMovie!: Movie;

  getMovies(url: string): Observable<data> {
    return this.http.get<data>(url);
  }

  getPopularMovies(pageNum: number) {
    const url = `${environment.API}movie/popular?api_key=${environment.apiKey}&page=${pageNum}`;
    this.getMovies(url).subscribe((data) => {
      console.log(data);
      this.movies = data.results;
    });
  }

  getRecentMovies(pageNum: number) {
    const url = `${environment.API}discover/movie?api_key=${environment.apiKey}&page=${pageNum}&sort_by=release_date.desc`;
    this.getMovies(url).subscribe((data) => {
      this.movies = data.results;
    });
  }

  getSingleMovie(id: number) {
    const url = `${environment.API}movie/${id}?api_key=${environment.apiKey}&language=en-US`;
    this.http.get<Movie>(url).subscribe((data) => {
      this.singleMovie = data;
      console.log(this.singleMovie);
    });
  }

  posterLink(posterPath: string) {
    if (posterPath === null) {
      return 'https://ae01.alicdn.com/kf/Hd6db477a0e114e838da83e9626648949H/Todo-sobre-mi-madre-All-About-My-Mother-Pedro-Almodovar-Spain-Movie-Film-Decorative-Poster-Wall.jpg';
    }
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  }
}
