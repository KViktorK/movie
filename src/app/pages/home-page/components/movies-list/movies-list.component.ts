import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/shared/Movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies?: Movie[];
  subscription?: Subscription;
  constructor(
    private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this._movieService.movieChanged.subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
    this.movies = this._movieService.getPopularMovies();
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
