import * as fromMovie from '../actions/movie.action';

export interface MovieState {
    payload?: any;
    errors?: any;
    loading?: boolean;
}


export const initialState: MovieState = {
    payload: {},
    errors: '',
    loading: false,
};


export function movieReducer(
    state = initialState,
    action: fromMovie.MovieActions
) {
    switch (action.type) {
        case fromMovie.SEARCH_MOVIE: {
            if (action.title === '') {
                return Object.assign({},
                    state, // old state
                    { loading: false } // new state
                );
            }
            return Object.assign({},
                state, // old state
                { loading: true } // new state
            );
        }

        case fromMovie.SEARCH_MOVIE_FAIL: {
            return Object.assign({},
                state, // old state
                {
                    errors: action.payload.errors,
                    loading: false,
                } // new state
            );

        }

        case fromMovie.INFO_MOVIE: {
            return Object.assign({},
                state, // old state
                {
                    errors: '',
                    payload: action.payload,
                    loading: false
                } // new state
            );
        }

    }

    return state;
}
