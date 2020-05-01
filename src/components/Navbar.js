import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
   const { books } = useContext(BookContext);
   return (
      <div className='navbar'>
         <h1>Reading List</h1>
         <p>Books in List : { books.length }</p>
      </div>
   )
}

export default Navbar;
