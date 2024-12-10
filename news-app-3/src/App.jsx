import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';

const App = () => {
  // const [category, setCategory] = useState("indonesia")
  const [category, setCategory] = useState("indonesia")
  const [query, setQuery] = useState("")

  return (
    <Router>
    {/* <div> */}
      <Navbar setCategory={setCategory} setQuery={setQuery}/>
      <Routes>
        <Route 
        path="/" 
        element={<NewsBoard category={category} />} 
        />
        <Route
        path='/indonesia' element={<NewsBoard category="indonesia" query={query}/>}
        />
        <Route
        path='/programming' element={<NewsBoard category="programming" query={query}/>}
        />
        <Route 
        path="/search/:query" element={<NewsBoard query={query} />} />
      </Routes>
    {/* </div> */}
    </Router>
  )
}

export default App;