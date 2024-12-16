// import React, { useState } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import SavedArticles from "./Components/SavedArticles";
import { SavedArticlesProvider } from './Context/SavedArticlesContext';


const App = () => {
  // const [category, setCategory] = useState("indonesia")
  // const [category, setCategory] = useState("indonesia")
  // const [query, setQuery] = useState("")
  // const [savedArticles, setSavedArticles] = useState([]);

  // const saveArticle = (article) => {
  //   setSavedArticles([...savedArticles, article]);
  // };

  // const removeArticle = (index) => {
  //   const updatedArticles = savedArticles.filter((_, i) => i !== index);
  //   setSavedArticles(updatedArticles);
  // };


  return (
    <Provider store={store}>
    <SavedArticlesProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<NewsBoard/>} />
        <Route path='/programming' element={<NewsBoard/>} />
        <Route path="/search/:query" element={<NewsBoard/>} />
        <Route path="/savedarticles" element={<SavedArticles savedArticles={SavedArticles} />} />
      </Routes>
    </Router>
    </SavedArticlesProvider>
    </Provider>
  )
}

export default App;