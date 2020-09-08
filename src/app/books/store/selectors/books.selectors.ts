import { BooksState } from '../reducers/books-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {getDefaultProductStructure} from '../../utilities/books-utilities';
import { Book } from '../../models/book.model';

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
  getAllBooks,
 (books) => {
   let res =  [...books.allBooks].reduce((acc, curr) => {
     console.log('acc', acc);
     console.log('curr', curr);
     return acc + curr.earnings;
    }, 0);
    console.log(res);
   return res;
 }
);

