import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../shared/Movie';

@Injectable()
export class MovieService {
  moviesChange = new Subject<Movie[]>();

  private movies: Movie[] = [];

  getPopularMovies(){
    return this.movies
  }

  getMovie(index:number){
    return this.movies[index]
  }
}
