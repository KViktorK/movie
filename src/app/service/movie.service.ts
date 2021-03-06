import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {  Movie } from '../shared/Movie';

@Injectable()
export class MovieService {
  movieChanged = new Subject<Movie[]>();
  private movies: Movie[] = [];
  
  getPopularMovies() {
    return this.movies;
  }
  getMovieById(id:number){
    return this.movies[id]
  }
  setMovies(movies:Movie[]){
    this.movies = movies
    this.movieChanged.next(this.movies.slice())
  }
}
