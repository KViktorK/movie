import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './shared/Movie';
import { MoviesServiceDB } from './service/moviesDB.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie'
  constructor(
    private _moviesService: MoviesServiceDB,

  ) { }
movies: Movie[]=[];
getMovie(){
  
}

ngOnInit() {
  this.getMovie()
 }
}