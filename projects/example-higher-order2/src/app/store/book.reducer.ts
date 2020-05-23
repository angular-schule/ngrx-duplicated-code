import { createReducer, on } from '@ngrx/store';
import reduceReducers from 'reduce-reducers';

import { SubmittableItem, Status, combineSomeReducer } from 'projects/shared/api-adapter';
import { Book } from 'projects/shared/book';

import * as BookActions from './book.actions';
import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';


export const bookFeatureKey = 'book';

export const booksReducer = booksApiAdapter.getReducer();
export const authorsReducer = authorsApiAdapter.getReducer();
export const thumbnailsReducer = thumbnailsApiAdapter.getReducer();


export interface State {
  books: SubmittableItem<Book[]>;
  authors: SubmittableItem<string[]>;
  thumbnails: SubmittableItem<string[]>;
  counter: number;
}

const oneTestBook = {
  data: [{ isbn: '0', title: 'Test Book', description: '', firstThumbnailUrl: '', rating: 5}],
  status: Status.Successful,
  error: undefined,
};

export const initialState: State = {
  books: oneTestBook,
  authors: undefined,
  thumbnails: undefined,
  counter: 1
};

// counter: regular reducer for demonstration
export const counterReducer = createReducer(
  initialState,

  on(BookActions.incrementCounter, state => ({
    ...state,
    counter: state.counter + 1
  })),

  on(BookActions.decrementCounter, state => ({
    ...state,
    counter: state.counter - 1
  })),
);

// the normal combineReducers overrides unknown properties
/*
export const adapterReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
  thumbnails: thumbnailsReducer,
  counter: s => s // it only has to passthrough the state
});
*/

export const adapterReducer = combineSomeReducer({
  books: booksReducer,
  authors: authorsReducer,
  thumbnails: thumbnailsReducer
});

export const reducer = reduceReducers(initialState, counterReducer, adapterReducer);