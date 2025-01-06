import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private MOVIES_API_URL = "http://localhost:6060";

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.MOVIES_API_URL);
  }
}
