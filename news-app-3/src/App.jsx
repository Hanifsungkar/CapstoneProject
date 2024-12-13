import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import SavedArticles from "./Components/SavedArticles";
import { SavedArticlesProvider } from './Context/SavedArticlesContext';


const App = () => {
  // const [category, setCategory] = useState("indonesia")
  const [category, setCategory] = useState("indonesia")
  const [query, setQuery] = useState("")
  // const [savedArticles, setSavedArticles] = useState([]);

  // const saveArticle = (article) => {
  //   setSavedArticles([...savedArticles, article]);
  // };

  // const removeArticle = (index) => {
  //   const updatedArticles = savedArticles.filter((_, i) => i !== index);
  //   setSavedArticles(updatedArticles);
  // };


  return (
    <SavedArticlesProvider>
    <Router>
    {/* <div> */}
      <Navbar setCategory={setCategory} setQuery={setQuery}/>
      <Routes>
        {/* <Route 
        path="/" element={<NewsBoard category={category} />} 
        /> */}
        <Route
        path='/' element={<NewsBoard category="indonesia" query={query}/>}
        />
        <Route
        path='/programming' element={<NewsBoard category="programming" query={query}/>}
        />
        <Route 
        path="/search/:query" element={<NewsBoard query={query} />} 
        />
        <Route
          path="/savedarticles" element={<SavedArticles savedArticles={SavedArticles} />}
        />
         <Route path="*" element={<Navigate to="/" replace />} 
        />
      </Routes>
    {/* </div> */}
    </Router>
    </SavedArticlesProvider>
  )
}

export default App;