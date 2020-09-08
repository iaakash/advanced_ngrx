
import {Book} from '../models/book.model';

export const getDefaultProductStructure = (id) => {
    let defaultBook: Book = {id: 0, earnings: 0, name: '', description: '' };
    if(id !== null ) {
      return defaultBook;
    }
  }