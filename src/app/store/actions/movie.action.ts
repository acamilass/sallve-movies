import { Action } from '@ngrx/store';


export const SEARCH_MOVIE = '[Movie Page] Search';
export const SEARCH_MOVIE_FAIL = '[Movie Page] Search Fail';
export const INFO_MOVIE = '[Movie Page] Info';


export class SearchMovie implements Action {
    readonly type = SEARCH_MOVIE;
    constructor(public title: string) {}
}

export class InfoMovie implements Action {
    readonly type = INFO_MOVIE;
    constructor(public payload: any) {}
}

export class SearchMovieFail implements Action {
    readonly type = SEARCH_MOVIE_FAIL;
    constructor(public payload: { errors: string }) {}
  }

// action types
export type MovieActions = SearchMovie | SearchMovieFail | InfoMovie;
