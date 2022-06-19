import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Movie } from '../shared/Movie';
import { MovieService } from './movie.service';
import { MoviesServiceDB } from './moviesDB.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolverService implements Resolve<Movie[]>{
  constructor(
    private _moviesDB: MoviesServiceDB,
    private _moviesService: MovieService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movies = this._moviesService.getPopularMovies();
    if (movies.length === 0) {
      return this._moviesDB.getPopularMovies();
    } else {
      return movies;
    }
  }
}
