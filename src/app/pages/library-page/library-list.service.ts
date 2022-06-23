import { Subject } from 'rxjs';
import { Movie } from 'src/app/shared/Movie';

export class LibraryListService {
  moviesChanged = new Subject<Movie[]>();
  private myMovies: Movie[] = [];

  getMovies() {
    return this.myMovies.slice();
  }

  getMovie(index: number) {
    return this.myMovies[index];
  }
}
