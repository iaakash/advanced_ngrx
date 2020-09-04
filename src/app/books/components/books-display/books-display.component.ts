import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.scss']
})
export class BooksDisplayComponent implements OnInit {

  @Input() books: Book[];
  @Output() select: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(id: string) {
    this.select.emit(id);
  }

}
