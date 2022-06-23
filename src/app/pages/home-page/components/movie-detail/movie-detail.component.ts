import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/service/data-storage.service';

import {  MovieDetail } from 'src/app/shared/Movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie!: MovieDetail;
  id!: number;
  sub?: Subscription;
  constructor(
    private _dataStorageService: DataStorageService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}


  onCancel(){
    let modal_item  = document.getElementById('modal_movie-item')
    modal_item?.classList.remove('show-card')
    modal_item?.classList.add('hidden-card');
    this._router.navigate(['../../'], {relativeTo: this._route});
  }
  ngOnInit(): void {
    this._route.params
    .subscribe(
      (params:Params)=>{
        this.id = +params['id']
        this._dataStorageService.getMovieDetail(this.id).subscribe(
        (res:MovieDetail)=>{this.movie = res}
      ) 
      }
    )
    
  }
}
