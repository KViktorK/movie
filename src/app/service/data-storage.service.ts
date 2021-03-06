import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { IMovie, Movie, MovieDetail } from '../shared/Movie';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private _url = 'https://api.themoviedb.org/3/movie/';
  private _search = 'https://api.themoviedb.org/3/search/movie';
  private _apiKey = '68b4fe2a513155a58dd0af4adacb281b';

  constructor(private _http: HttpClient, private _movieService: MovieService) {}

  getPopularMovies() {
    console.log('dataStorage');
    let moviesUrl = `${this._url}popular?api_key=${this._apiKey}`;
    return this._http.get<IMovie>(moviesUrl).pipe(
      map(({ results }) => {
        return results.map((recipe: Movie) => {
          return { ...recipe };
        });
      }),
      tap((movies) => {
        this._movieService.setMovies(movies);
      })
    );
  }

  getMovieDetail(id:number){
    let moiveDetailUrl = `${this._url}/${id}?api_key=${this._apiKey}`
    return this._http.get<MovieDetail>(moiveDetailUrl)
  }

  searchMovie(query: string) {
    let searchUrl = `${this._search}?api_key=${this._apiKey}&query=${query}`;
    return this._http.get<IMovie>(searchUrl).pipe(
      map(({ results }) => {
        return results.map((recipe: Movie) => {
          return { ...recipe };
        });
      }),
      tap((movies) => {
        this._movieService.setMovies(movies);
      })
    );
  }
}
