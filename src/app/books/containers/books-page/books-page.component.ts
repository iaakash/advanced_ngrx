import { Component, OnInit } from '@angular/core';
import { State } from '../../store/reducers/books-reducer';
import { Store } from '@ngrx/store';

import {booksPageActions} from '../../store/actions';
import * as booksSelectors from '../../store/selectors';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  allBooks$: Observable<Book[]>;
  selectedBook$ : Observable<Book>;
  earningsCount$: Observable<Number>;

  constructor(
    private store: Store<State>
  ) { 
    this.store.dispatch(booksPageActions.loadBooks());
  }

  ngOnInit(): void {
    this.allBooks$ = this.store.select(booksSelectors.getAllBooks);
    this.selectedBook$ = this.store.select(booksSelectors.getSelectedBook);
    this.earningsCount$ = this.store.select(booksSelectors.getEarningsCount);
  }

  onSelect(bookId) {
    this.store.dispatch(booksPageActions.selectBook({bookId}));
  }

  createBook() {
    this.store.dispatch(booksPageActions.selectBook({bookId: 0}));
  }

  onBookCreateOrUpdate(book: Book) {
    debugger;
    if(!book.id) {
      this.store.dispatch(booksPageActions.createBook({book}));
    }else {
      this.store.dispatch(booksPageActions.updateBook({book}));
    }
  }

}
