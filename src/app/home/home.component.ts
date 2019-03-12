import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  result: object;

  searchMovie(title: string) {
    this.moviesService.searchMovieByTitle(title)
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

}
