import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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

import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LibraryPageComponent,
    MoviesListComponent,
    MovieItemComponent,
    HeaderComponent,
    MovieDetailComponent,

    ModalComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [MovieService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
