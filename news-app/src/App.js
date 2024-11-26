import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import NewsBoard from './Components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState("category")

  return (
    <div>
        <Header setCategory={setCategory}/>
        <NewsBoard category={category} />
    </div>
  );
}

export default App;