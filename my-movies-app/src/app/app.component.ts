import { Component, inject, Inject, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'my-movies-app';

  private moviesService = inject(MoviesService);

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe(console.log);
  }
}
