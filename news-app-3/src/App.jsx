import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState("indonesia")
  const [query, setQuery] = useState("")

  return (
    <div>
      <Navbar setCategory={setCategory} setQuery={setQuery}/>
      <NewsBoard category={category} query={query}/>
    </div>
  )
}

export default App;