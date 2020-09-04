import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {booksApiActions, booksPageActions} from '../actions';
import { filter, switchMap, map, mergeMap, tap, catchError, exhaustMap } from 'rxjs/operators';
import {BooksService} from '../../books-service';
import { of } from 'rxjs';


@Injectable()
export class BooksEffects {
    constructor(private actions$: Actions, private booksService: BooksService) { }
    
    loadBooks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(booksPageActions.loadBooks),
            mergeMap(_ => {
              return this.booksService.all().pipe(
                map((books) => booksApiActions.loadBooksSuccess({books})),
                catchError(error => of(booksApiActions.loadBooksFailure({error})))
              );
            })
        );
      });

      createBooks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(booksPageActions.createBook),
            exhaustMap(({book}) => {
              return this.booksService.create(book).pipe(
                map((book) => booksApiActions.createBookSuccess({book})),
                catchError(error => of(booksApiActions.loadBooksFailure({error})))
              );
            })
        );
      });

      update$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(booksPageActions.updateBook),
            exhaustMap(({book}) => {
              return this.booksService.updateBook(book).pipe(
                map((book) => booksApiActions.updateBookSuccess({book})),
                catchError(error => of(booksApiActions.updateBookFailure({error})))
              );
            })
        );
      });
}