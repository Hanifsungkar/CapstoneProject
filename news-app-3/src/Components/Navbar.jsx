import React, { useState } from 'react'

const Navbar = ({setCategory, setQuery}) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handlesearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News App</span></a>
    <button className="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("indonesia")}>Indonesia</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("programming")}>Programming</div>
        </li>
      </ul>
      <form className='d-flex ms-auto' onSubmit={handlesearch}>
        <input
        type='text'
        className='form-ccontol me-2'
        placeholder='Search Articles'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
        <button className='btn btn-light' type='submit'>
          Search
        </button>
      </form>
    </div>
  </nav>
  )
}

export default Navbar