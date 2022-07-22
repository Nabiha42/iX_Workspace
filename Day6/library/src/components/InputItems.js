import React from 'react'

export default function InputItems() {
  return (

    <div className='mt-4'>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label fw-bold">Title</label>
            <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label fw-bold">Author</label>
            <input type="email" className="form-control"/>
        </div>

        <div className="mb-3">
            <label for="exampleFormControlInput3" className="form-label fw-bold">ISBN#</label>
            <input type="email" className="form-control"/>
        </div>

        <div className="button d-grid gap-2"><button className="btn btn-outline-secondary fw-bold">SUBMIT</button></div>
        
    </div>
  )
}