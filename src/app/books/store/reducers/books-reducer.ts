import { createReducer, on } from '@ngrx/store';
import { Book } from '../../models/book.model';
import * as AppState from '../../../store/app.state';
import { booksApiActions, booksPageActions } from '../actions';

// define the state for the module
export interface BooksState {
  allBooks: Book[];
  error: string | null;
  showAuthor: boolean;
  currentBookId: number | null;
}

export interface State extends AppState.State {
  books: BooksState;
}

const initialState: BooksState = {
  allBooks: [],
  error: null,
  showAuthor: false,
  currentBookId: null,
};

export const booksReducer = createReducer<BooksState>(
  initialState,
  on(
    booksApiActions.loadBooksSuccess,
    (state: BooksState, action): BooksState => {
      debugger;
      return {
        ...state,
        allBooks: action.books,
      };
    }
  ),
  on(
    booksPageActions.selectBook,
    (state: BooksState, action): BooksState => {
      return {
        ...state,
        currentBookId: action.bookId
      };
    }
  ),
  on(
    booksApiActions.createBookSuccess,
    (state: BooksState, action): BooksState => {
      return {
        ...state,
        currentBookId: null,
        allBooks: [...state['allBooks'], action.book]
      };
    }
  ),
  on(
    booksApiActions.updateBookSuccess,
    (state: BooksState, action): BooksState => {
      const books = state['allBooks'].map(book => {
        if(book.id === action.book.id) {
          return action.book;
        }else {
          return book;
        }
      })
      return {
        ...state,
        currentBookId: null,
        allBooks: [...books]
      };
    }
  )
);
