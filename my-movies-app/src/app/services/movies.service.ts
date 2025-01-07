import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.mode';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private MOVIES_API_URL = environment.moviesApi;

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.MOVIES_API_URL);
  }

  postUser(user: User) {
    return this.http.post(`${this.MOVIES_API_URL}/users`, user);
  }

  getUsers() {
    return this.http.get(`${this.MOVIES_API_URL}/users`);
  }
}
