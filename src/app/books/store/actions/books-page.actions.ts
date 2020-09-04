import { createAction, props } from '@ngrx/store';
import { BookRequiredProps, Book } from '../../models/book.model';

export const loadBooks = createAction('[Books Page] Load Books');

export const selectBook = createAction('[Books Page] Select Book', props<{bookId: number}>());

export const createBook = createAction('[Books Page] Create Book', props<{book: BookRequiredProps}>());

export const updateBook = createAction('[Books Page] Update Book', props<{book: Book}>());