import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import * as fromMovie from '../actions/movie.action';
import { Router } from '@angular/router';

@Injectable()
export class MovieEffects {

  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType(fromMovie.SEARCH_MOVIE), // action name
      mergeMap((payload: any) => this.moviesService.searchMovieByTitle(payload.title)
        .pipe(
          map((result: any) => {

            if (!result.Error) {

              setTimeout(() => {
                this.router.navigate(['/search']);
              }, 0);
              return new fromMovie.InfoMovie(result);
            }

            return new fromMovie.SearchMovieFail({errors: result.Error });
          }
        ))
      ),
    );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService,
    private router: Router
  ) {}
}
