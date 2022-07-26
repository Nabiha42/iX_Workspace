import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import InputItems from './components/InputItems';
import BookTable from './components/BookTable';

export default function App() {

  const [books, setBooks] = useState([]);
  
  function onBookCreated(book){
    const newBooks = [];
    for (let b of books) {
      newBooks.push(b);
    }
    newBooks.push(book);
    setBooks(newBooks);
  }

  return (
    <div className='container mt-4'>
      <div className='card card-body text-left'>
        <h1>Add Book:</h1>

        <InputItems onBookCreated={onBookCreated}></InputItems>

        <BookTable books={books}></BookTable>
      </div>
    </div>
  )
}