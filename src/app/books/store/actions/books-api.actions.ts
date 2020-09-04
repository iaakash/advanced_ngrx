import { createAction, props } from '@ngrx/store';
import { BookRequiredProps, Book } from '../../models/book.model';

export const loadBooksSuccess = createAction('[Books Api] Load Books Success', props<{books: Book[]}>());
export const loadBooksFailure = createAction('[Books Api] Load Books Failure', props<{error: string}>());

export const createBookSuccess = createAction('[Books Page] Create Book Success', props<{book: Book}>());
export const createBookFailure = createAction('[Books Page] Create Book Failure', props<{error: string}>());

export const updateBookSuccess = createAction('[Books Page] Update Book Success', props<{book: Book}>());
export const updateBookFailure = createAction('[Books Page] Update Book Failure', props<{error: string}>());