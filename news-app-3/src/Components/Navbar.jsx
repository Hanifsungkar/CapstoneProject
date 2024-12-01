import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News App</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
    </div>
  </nav>
  )
}

export default Navbar