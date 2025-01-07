import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieDbServiceService {
  private apiKey = `api_key=${environment.movieDBApiKey}`;
  private urlMovieDB = environment.movieDBApi;
  private url = '';
  private language = 'language=es';
  private petitionType = '';
  private sortBy = 'sort_by=';
  private query = 'query=';
  private termForSearch = '';
  private movieId = '';
  private collectionId = ''; // the id of the saga to which the movie belongs
  private parameters: string[] = [];

  private http = inject(HttpClient);

  getPopularMovies() {
    this.petitionType = 'discover/movie';
    this.sortBy += 'vote_count.desc';
    this.parameters = [
      'vote_average.gte=8.0',
      'vote_count.gte=10000'
    ];
 
    this.url = `${this.urlMovieDB}/${this.petitionType}?${this.apiKey}&${this.sortBy}&${this.language}&${this.parameters.join('&')}`;

    return this.http.get(this.url);
  }
}
