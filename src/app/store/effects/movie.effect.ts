import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import * as fromMovie from '../actions/movie.action';

@Injectable()
export class MovieEffects {

  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType(fromMovie.SEARCH_MOVIE), // action name
      mergeMap((payload: any) => this.moviesService.searchMovieByTitle(payload.title)
        .pipe(
          map(movies =>  new fromMovie.InfoMovie(movies),
          catchError(() => of(new fromMovie.SearchMovieFail({errors: 'TODO - Error'}))) // TODO
        ))
      )
    );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
