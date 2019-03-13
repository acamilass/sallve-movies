import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/reducers/movie.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public payload: any =  {};

  constructor(public store: Store<MovieState>) { }

  ngOnInit() {
    console.log('state loading');
    this.store.select('movie').subscribe((state: MovieState) => {
      this.payload = state.payload;

      console.log(state.payload);
      console.log('state complete');
    });
  }

}
