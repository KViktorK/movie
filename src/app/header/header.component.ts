import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  search: string = '';
  constructor(
    private _dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSearch() {
    if (this.search) {
      this._dataStorageService.searchMovie(this.search).subscribe();
    }
  }
  onChange(){
    if(!this.search){
      this._dataStorageService.getPopularMovies().subscribe()
    }
  }
  ngOnInit(): void {}
}
