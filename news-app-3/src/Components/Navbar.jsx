import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchArticles } from '../store/action';
import { setCategory, setSearchTerm, fetchSearchArticles, toggleTheme } from '../store/action';


// const Navbar = ({setCategory, setQuery}) => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const navigate = useNavigate()

const Navbar = () => {
  const searchTerm = useSelector((state) => state.searchTerm)
  const theme = useSelector((state) => state.theme)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCategoryClick = (category) => {
    // setCategory(category)
    // setQuery("")
    dispatch(setCategory(category))
    navigate(category === 'indonesia' ? '/' : `/${category}`)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      // dispatch(setSearchTerm(searchTerm))
      // dispatch(fetchSearchArticles(searchTerm))
      dispatch(fetchSearchArticles(searchTerm))
      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  const goToSavedArticles = () => {
    navigate('/savedarticles');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
    <a className="navbar-brand" href="#"><span className={`badge ${theme === 'light' ? 'bg-dark text-light' : ' bg-light text-dark'} fs-4`}>News App</span></a>
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
        className='form-control me-2'
        placeholder='Search Articles'
        value={searchTerm}
        onChange={(e) => dispatch (setSearchTerm(e.target.value))} />
        <button className='btn btn-light' type='submit'>
          Search
        </button>
      </form>
      <button
          className="btn btn-outline-secondary ms-3"
          onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    </div>
  </nav>
  )
}

export default Navbar