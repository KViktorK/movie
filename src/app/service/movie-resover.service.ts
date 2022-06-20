import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Movie } from '../shared/Movie';
import { DataStorageService } from './data-storage.service';
import { MovieService } from './movie.service';

@Injectable({ providedIn: 'root' })
export class MovieResolverService implements Resolve<any> {
  constructor(
    private dataStorageService: DataStorageService,
    private movieSrvice: MovieService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movie = this.movieSrvice.getPopularMovies();

    if (movie.length === 0) {
      console.log('resolve')
      return this.dataStorageService.getPopularMovies();
    
    } else {
      return movie;
    }
  }
}
