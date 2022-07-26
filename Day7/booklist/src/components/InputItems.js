import React, {useState} from 'react';

import {Book} from '../models/book';

export default function InputItems(props) {

  const [bookName, setbookName] = useState('');
  const [authorName, setauthorName] = useState('');
  const [isbnNum, setisbnNum] = useState('');

  function onFormSubmitted(event) {
    event.preventDefault();

    //create a new book
    const book = new Book((new Date()).getTime(), bookName, authorName, isbnNum);
    props.onBookCreated(book);
    setbookName('');
    setauthorName('');
    setisbnNum('');
    

  }
  return (

    <div className='mt-4'>
      <form onSubmit={onFormSubmitted}>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label fw-bold">Title</label>
          <input 
          value = {bookName}
          onChange={(event)=> setbookName(event.target.value)}
          type="text" 
          className="form-control" />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label fw-bold">Author</label>
          <input 
          value = {authorName}
          onChange={(event)=> setauthorName(event.target.value)}
          type="text" 
          className="form-control"/>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput3" className="form-label fw-bold">ISBN#</label>
          <input 
          value = {isbnNum}
          onChange={(event)=> setisbnNum(event.target.value)}
          type="text" 
          className="form-control"/>
        </div>

        <div className="button d-grid gap-2">
          <button className="btn btn-outline-secondary fw-bold" 
          type="submit">SUBMIT
          </button>
        </div>
      </form>  
        
    </div>
  )
}