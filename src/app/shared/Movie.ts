export interface IMoviePopular{
  results: Movie[]
}
interface IGenres{
  id:number
  name:string
}
export class Movie{
  public id:number
  public title:string
  public overview:string
  public poster_path:string
  public genres:IGenres[]
  public vote_average:number
  public tagline:string

  constructor( 
       id:number,
       title:string,
       overview:string,
       poster_path:string,
       genres:IGenres[],
       vote_average:number,
       tagline:string){

      this.id=id;
      this.title=title;
      this.overview=overview;
      this.poster_path=poster_path;
      this.genres=genres;
      this.vote_average=vote_average;
      this.tagline=tagline;
  }
}