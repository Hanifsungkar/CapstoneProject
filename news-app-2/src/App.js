import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('indonesia')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
    try {
        const res = await fetch (`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_API_KEY}`)
        const articles = await res.json()
        console.log(articles.response.docs)
        setArticles(Response.docs)
      } catch (error) {
        console.error(error)
    }
  }
        fetchArticles()
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
