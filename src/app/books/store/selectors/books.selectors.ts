import { BooksState } from '../reducers/books-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {getDefaultProductStructure} from '../../utilities/books-utilities';

const getBooksFeatureState = createFeatureSelector<BooksState>('books');

export const getAllBooks = createSelector(
  getBooksFeatureState,
  (state) => state.allBooks
);


export const getSelectedBookId = createSelector(
  getBooksFeatureState,
  (state) => state.currentBookId
);

export const getSelectedBook = createSelector(
  getBooksFeatureState,
  getSelectedBookId,
  (state, id) => {
    return id ? state.allBooks.filter(book => book.id === id)[0] : getDefaultProductStructure(id)
  }
);

export const getEarningsCount = createSelector(
  getBooksFeatureState,
  (state) => {
    //return id ? state.allBooks.filter(book => book.id === id)[0] : getDefaultProductStructure(id)
  }
);

