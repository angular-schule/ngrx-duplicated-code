import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from '../../../../shared/book';


// export const loadItems = createAction(
//   '[Book] Load Items',
//   props<{ kind: 'books' | 'authors' | 'thumbnails' }>()
// );

// export const loadItemsSuccess = createAction(
//   '[Book] Load Items Success',
//   props<{ kind: 'books' | 'authors' | 'thumbnails', data: Book[] | string[] }>()
// );

// export const loadItemsFailure = createAction(
//   '[Book] Load Items Failure',
//   props<{ kind: 'books' | 'authors' | 'thumbnails', error: HttpErrorResponse }>()
// );


export const loadBooks = createAction(
  '[Book] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ data: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: HttpErrorResponse }>()
);

// second duplication 🤨

export const loadAuthors = createAction(
  '[Book] Load Authors'
);

export const loadAuthorsSuccess = createAction(
  '[Book] Load Authors Success',
  props<{ data: string[] }>()
);

export const loadAuthorsFailure = createAction(
  '[Book] Load Authors Failure',
  props<{ error: HttpErrorResponse }>()
);

// third duplication 😞

export const loadThumbnails = createAction(
  '[Book] Load Thumbnails'
);

export const loadThumbnailsSuccess = createAction(
  '[Book] Load Thumbnails Success',
  props<{ data: string[] }>()
);

export const loadThumbnailsFailure = createAction(
  '[Book] Load Thumbnails Failure',
  props<{ error: HttpErrorResponse }>()
);
