import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book, BookRequiredProps } from './models/book.model';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/books';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  all(): Observable<Book[]> {
    return this.http.get<Book[]>(BASE_URL);
  }

  create(bookProps: BookRequiredProps): Observable<Book> {
    const newBookToBeCreated: Book = {
      // id: uuid(),
      ...bookProps,
    };

    return this.http.post<Book>(`${BASE_URL}`, newBookToBeCreated);
  }

  updateBook(book) {
    return this.http.put<Book>(`${BASE_URL}/${book.id}`, book);
  }
}
