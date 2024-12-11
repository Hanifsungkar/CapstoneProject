import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setCategory, setQuery}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    setCategory(category)
    setQuery("")
    navigate(`/${category}`)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setQuery(searchTerm); // Set query state
      navigate(`/search/${encodeURIComponent(searchTerm)}`); // Ubah URL sesuai query pencarian
    }
  };

  const goToSavedArticles = () => {
    navigate('/savedarticles'); // Navigasi ke halaman Saved Articles
  };

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
          <div className="nav-link" onClick={()=> handleCategoryClick("indonesia")}>Indonesia</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> handleCategoryClick("programming")}>Programming</div>
        </li>
        <li className="nav-item">
            <div className="nav-link" onClick={goToSavedArticles}>
              Saved Articles
            </div>
          </li>
      </ul>
      <form className='d-flex ms-auto' onSubmit={handleSearch}>
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

 // const handlesearch = (e) => {
  //   e.preventDefault()
  //   setCategory("")
  //   setQuery(searchTerm)
  //   navigate(`/${searchTerm}`)
  // }