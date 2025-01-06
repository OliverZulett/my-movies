import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.mode';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private MOVIES_API_URL = "http://localhost:6060";

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
