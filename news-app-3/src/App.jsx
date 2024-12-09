import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState("indonesia")
  const [query, setQuery] = useState("")

  return (
    <Router>
    <div>
      <Navbar setCategory={setCategory} setQuery={setQuery}/>
      <Routes>
      <NewsBoard category={category} query={query}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;