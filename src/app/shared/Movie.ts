export interface IMovie {
  results: Movie[];
}
export class Movie {
  public id: number;
  public title: string;
  public overview: string;
  public poster_path: string;
  public vote_average: number;
  public tagline: string;

  constructor(
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    vote_average: number,
    tagline: string
  ) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
    this.tagline = tagline;
  }
}

interface IGenres {
  id: number;
  name: string;
}
export class MovieDetail {
  public id: number;
  public title: string;
  public overview: string;
  public poster_path: string;
  public genres: IGenres[];
  public vote_average: number;
  public status: string;
  constructor(
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    vote_average: number,
    genres: IGenres[],
    status: string
  ) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
    this.genres = genres;
    this.status = status;
  }
}
