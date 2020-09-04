import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './containers/books-page/books-page.component';
import { BooksRevenueCountComponent } from './components/books-revenue-count/books-revenue-count.component';
import { BooksDisplayComponent } from './components/books-display/books-display.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

import * as containers from './containers';
import * as components from './components';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/effects/books.effects';
import { StoreModule } from '@ngrx/store';
import { from } from 'rxjs';
import { booksReducer } from './store/reducers/books-reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const booksComponents = [
  containers.BooksPageComponent,
  components.BookEditComponent,
  components.BooksDisplayComponent,
  components.BooksRevenueCountComponent,
  components.EarningsCountComponent,
];

@NgModule({
  declarations: booksComponents,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
})
export class BooksModule {}
