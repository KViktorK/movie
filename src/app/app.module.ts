import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { MoviesListComponent } from './pages/home-page/components/movies-list/movies-list.component';
import { MovieItemComponent } from './pages/home-page/components/movie-item/movie-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MovieService } from './service/movie.service';
import { RouterModule } from '@angular/router';

import { MovieDetailComponent } from './pages/home-page/components/movie-detail/movie-detail.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LibraryPageComponent,
    MoviesListComponent,
    MovieItemComponent,
    HeaderComponent,
    MovieDetailComponent,
    SearchPageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
