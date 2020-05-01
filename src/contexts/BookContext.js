import React, { createContext, useState } from 'react';
import {v1 as uuid} from 'uuid'; 

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books, setBooks] = useState([
      { title: 'book 1', author: 'auth 1', id: 1 },
      { title: 'book 2', author: 'auth 2', id: 2 },
      { title: 'book 3', author: 'auth 3', id: 3 }
   ]);

   const addBook = (title, author) => {
      setBooks([...books, { title, author, id : uuid() }]);
   };

   const removeBook = (id) => {
      setBooks(books.filter( book => book.id !== id ));
   };

   return (
      <BookContext.Provider value={{ books, addBook, removeBook}}>
         { props.children }
      </BookContext.Provider>
   )
}

export default BookContextProvider;
