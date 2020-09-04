import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models/book.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookEditComponent implements OnInit {
  mode: string = null;
  originalBook: Book | null;

 
  @Input() set book(book: Book) {
    debugger;
    if (book.id) {
      this.mode = 'EDIT';
      this.patchForm(book);
    } else {
      this.mode = 'CREATE';
      this.initForm();
    }
    this.originalBook = book;
  }

  @Output() save: EventEmitter<Book> = new EventEmitter();
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
  
    // if(this.mode == 'EDIT') {
     
    // }
  }

  patchForm(book) {
    this.bookForm.setValue({
      name: book.name,
      earnings: book.earnings,
      description: book.description,
    });
  }

  initForm() {
    this.bookForm = this.fb.group({
      name: [''],
      earnings: [''],
      description: [''],
    });
  }

  onSubmit() {
    debugger;
    let payload = { ...this.originalBook, ...this.bookForm.value };
    debugger;
    this.save.emit(payload);
  }
}
