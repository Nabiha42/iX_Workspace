import React from 'react'

export default function BookTable(props) {
  return (
    <div>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {
            props.books.map((book)=>
              <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
              </tr>
            )  
          }        
        </tbody>
      </table>
    </div>
  )
}