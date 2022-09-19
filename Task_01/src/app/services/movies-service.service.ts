import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Movie } from "../models/movies.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }
  url = `https://api.themoviedb.org/3/movie/761?api_key=${environment.apiKey}`
  movies = [];
  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url);
  }

  storeMovies() {
    this.getMovies().subscribe((data) => {
      console.log(data);
    })
  }

  
}
