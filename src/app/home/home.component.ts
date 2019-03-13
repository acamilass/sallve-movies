import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Store } from '@ngrx/store';
import { SearchMovie } from '../store/actions/movie.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  searchMovie(title: string) {
    this.store.dispatch(new SearchMovie(title));
  }

  constructor(private moviesService: MoviesService, private store: Store<any>) { }

  ngOnInit() {
  }

}
