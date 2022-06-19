import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesServiceDB } from './service/moviesDB.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { MoviesListComponent } from './pages/home-page/components/movies-list/movies-list.component';
import { MovieItemComponent } from './pages/home-page/components/movie-item/movie-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MovieService } from './service/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LibraryPageComponent,
    MoviesListComponent,
    MovieItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [MoviesServiceDB,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
