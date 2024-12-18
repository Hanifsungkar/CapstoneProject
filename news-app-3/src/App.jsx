import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import SavedArticles from "./Components/SavedArticles";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<NewsBoard/>} />
        <Route path='/programming' element={<NewsBoard/>} />
        <Route path="/search/:query" element={<NewsBoard/>} />
        <Route path="/savedarticles" element={<SavedArticles />} />
      </Routes>
    </Router>
    </Provider>
  )
}

export default App;