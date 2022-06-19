import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMoviePopular, Movie } from '../shared/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceDB {
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}`;
    return this.http.get<IMoviePopular>(moviesUrl).pipe(
      map((movies) => {
        return movies.results.map((movie) => {
          return { ...movie };
        });
      })
    );
  }
}
