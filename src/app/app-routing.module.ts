import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './pages/home-page/components/movie-detail/movie-detail.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'movie/:id',
        component: MovieDetailComponent,
      },
    ],
  },
  { path: 'library', component: LibraryPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
