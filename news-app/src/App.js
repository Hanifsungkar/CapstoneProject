import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import NewsBoard from './Components/NewsBoard';

const App = () => {
  return (
    <div>
        <Header />
        <NewsBoard />
    </div>
  );
}

export default App;