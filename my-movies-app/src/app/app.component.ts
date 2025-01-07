import { Component, inject, Inject, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './services/movies.service';
import { MovieDbServiceService } from './services/movie-db-service.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MovieCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'my-movies-app';

  private moviesService = inject(MoviesService);
  private movieDbService = inject(MovieDbServiceService);

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe(console.log);
    
    this.moviesService.postUser({
      email: Math.random().toString(),
      name: Math.random().toString()
    }).subscribe(console.log);
    
    this.moviesService.getUsers().subscribe(console.log);

    this.movieDbService.getPopularMovies().subscribe(console.log);
  }
}
