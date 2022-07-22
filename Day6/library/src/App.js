import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import InputItems from './components/InputItems';
import BookTable from './components/BookTable';

export default function App() {
  return (
    <div className='container mt-4'>
      <div className='card card-body text-left'>
        <h1>Add Book:</h1>

        <InputItems></InputItems>

        <BookTable></BookTable>
      </div>
    </div>
  )
}