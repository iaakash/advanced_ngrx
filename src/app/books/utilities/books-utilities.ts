
import {Book} from '../models/book.model';

export const getDefaultProductStructure = (id) => {
    let defaultBook: Book = {id: 0, earnings: '', name: '', description: '' };
    if(id !== null ) {
      return defaultBook;
    }
  }